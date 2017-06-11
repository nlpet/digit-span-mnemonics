import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
    Header, Segment, Button, Dropdown, Input, Divider
} from 'semantic-ui-react';

import * as actions from '../actions';
import { getEmoji } from '../utils';


const Testing = ({ testing, actions }) => {
    let testGame;
    const {
        inProgress, range, challengeNumber, ended, time,
        correctAnswers, wrongAnswers, difficulties
    } = testing;

    const timer = () => actions.testTimerTick();

    const changeDifficulty = (e, data) => {
        return actions.changeTestDifficulty({ difficulty: data.value });
    };

    const setNumberOfDigits = (e, data) => {
        return actions.setNumberOfDigits({ numberOfDigits: data.value });
    };

    const checkAnswer = () => {
        const answerElement = document.getElementById("testAnswer");
        const answer = answerElement.value;
        const number = challengeNumber.replace(/[\s]/g, '');

        answerElement.value = '';
        return actions.markTestAnswer({ correct: answer === number });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') checkAnswer();
    };

    if (inProgress && !ended) {
        const number = time > 0 ? challengeNumber : ' ';

        testGame = (
            <div>
                <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {number}
                </h1>
                <Input style={{ marginRight: "10px" }}
                       placeholder="Answer..."
                       onKeyPress={handleKeyPress}
                       id="testAnswer" />
                <Button color="green" onClick={checkAnswer}>Submit</Button>
            </div>
        );
    } else if (ended) {
        const p = Math.ceil((correctAnswers / (correctAnswers + wrongAnswers)) * 100);
        const face = getEmoji(p);
        const msg = `You got ${correctAnswers} answers right! ${face}`;

        testGame = (
            <div>
                <Divider />
                <p>Game over! {msg}</p>
            </div>
        );
    }

    return (
        <div>
            <Header as="h2">
                Test Mode
                <Header.Subheader>
                    Play Digit Span and see how your performance has improved.
                </Header.Subheader>
            </Header>
            <Segment.Group horizontal key="challenge">
                <Segment>
                    <Button color="purple"
                            onClick={() => actions.startTest({ timer })}>
                        New game
                    </Button>
                    <Button color="red"
                            onClick={actions.endTest}>
                        End game
                    </Button>
                    <Dropdown style={{ marginRight: "10px", marginLeft: "5px" }}
                             selection disabled={inProgress}
                              placeholder="difficulty"
                              options={difficulties}
                              onChange={changeDifficulty} />
                    <Dropdown selection disabled={inProgress}
                            placeholder="number of digits"
                            options={range}
                            onChange={setNumberOfDigits} />
                    {testGame}
                </Segment>
                { (inProgress && time >= 0) ?
                    <Segment>
                        <div>
                            <h2>Time: {time}</h2>
                            <p>
                                <b>Correct: {correctAnswers}</b><br />
                                <b>Wrong: {wrongAnswers}</b>
                            </p>
                        </div>
                    </Segment> : null
                }
            </Segment.Group>
        </div>
    );
};


Testing.propTypes = {
    testing: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testing);
