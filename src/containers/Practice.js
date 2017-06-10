import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { contains, toLower } from 'ramda';
import PropTypes from 'prop-types';
import {
    Segment, Button, Input, Divider,
    Message
} from 'semantic-ui-react';

import * as actions from '../actions';


const Practice = ({ games, learn, actions }) => {
    const {
        numQuestion, questionsInSession, currentQuestion,
        correctAnswers, wrongAnswers, inProgress
    } = learn;
    const practiceGame = [];

    if (inProgress) {
        const checkAnswer = () => {
            let correct;
            const answerElement = document.getElementById("practiceAnswer");
            const answer = toLower(answerElement.value);

            if (typeof currentQuestion.answer === 'string') {
                correct = answer === currentQuestion.answer ? 1 : 0;
            } else {
                correct = contains(answer, currentQuestion.answer) ? 1 : 0;
            }
            console.log('checkAnswer', correct, answer, currentQuestion);
            answerElement.value = '';
            return actions.markPracticeAnswer({ correct, answer, correctAnswer: currentQuestion.answer });
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') checkAnswer();
        };

        if (numQuestion < questionsInSession) {
            practiceGame.push(
                <Segment.Group horizontal key="practice">
                    <Segment>
                        <h3>{currentQuestion.text}</h3>
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
                        { learn.feedback && learn.inProgress && learn.lastAnswer.correct === 0 ?
                            <div>
                                <Divider />
                                <Message positive size="tiny">
                                  <p>{learn.lastAnswer.hint}</p>
                                </Message>
                            </div> : null
                        }
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
            <Button color="purple" onClick={actions.startPractice}>New game</Button>
            <Button.Group>
                <Button positive={!learn.feedback} onClick={actions.toggleFeedback}>
                    Feedback Off
                </Button>
                <Button.Or />
                <Button positive={learn.feedback} onClick={actions.toggleFeedback}>
                    Feedback On
                </Button>
            </Button.Group>
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
