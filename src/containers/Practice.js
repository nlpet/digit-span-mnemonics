import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { contains, toLower } from 'ramda';
import PropTypes from 'prop-types';
import { Segment, Button, Input, Divider } from 'semantic-ui-react';

import * as actions from '../actions';
import { generateStep } from '../utils';


const Practice = ({ games, learn, actions }) => {
    const {
        numQuestion, questionsInSession,
        correctAnswers, wrongAnswers, inProgress
    } = learn;
    const practiceGame = [];

    if (inProgress) {
        const step = generateStep();

        const checkAnswer = () => {
            let correct;
            const answerElement = document.getElementById("practiceAnswer");
            const answer = toLower(answerElement.value);

            if (typeof step.answer === 'string') {
                correct = answer === step.answer ? 1 : 0;
            } else {
                correct = contains(answer, step.answer) ? 1 : 0;
            }

            answerElement.value = '';
            return actions.markPracticeAnswer({ correct });
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') checkAnswer();
        };

        if (numQuestion < questionsInSession) {
            practiceGame.push(
                <Segment.Group horizontal key="practice">
                    <Segment>
                        <h3>{step.question}</h3>
                        <Input style={{ marginRight: "10px" }}
                               placeholder="Answer..."
                               onKeyPress={handleKeyPress}
                               id="practiceAnswer" />
                        <Button color="green" onClick={checkAnswer}>Submit</Button>
                    </Segment>
                    <Segment>
                        <p>
                            <b>Correct: {correctAnswers}</b><br />
                            <b>Wrong: {wrongAnswers}</b>
                        </p>
                    </Segment>
                </Segment.Group>
            );
        } else {
            const face = correctAnswers >= (questionsInSession / 2) ? ': ]' : ': [';
            const msg = `You got ${correctAnswers} answers right! ${face}`;
            practiceGame.push(
                <div key="game-over">
                    <Divider />
                    <p>Game over! You got { msg }</p>
                </div>
            );
        }
    }

    return (
        <div>
            <h2>Ready?</h2>
            <Button color="purple" onClick={actions.startPractice}>New game</Button>

            {practiceGame}
        </div>
    );
};

Practice.propTypes = {
    games: PropTypes.object.isRequired,
    learn: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
