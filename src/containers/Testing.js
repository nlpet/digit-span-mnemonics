import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
    Header, Segment, Button, Dropdown, Input, Divider
} from 'semantic-ui-react';

import * as actions from '../actions';
import { getEmoji } from '../utils';


const helpers = {
    handleKeyPress: (e, checkAnswer, state, actions) => {
        if (e.key === 'Enter') checkAnswer(state, actions);
    },
    changeDifficulty: (e, data, actions) => {
        return actions.changeTestDifficulty({ level: data.value });
    },
    setNumberOfDigits: (e, data, actions) => {
        return actions.setNumberOfDigits({ numberOfDigits: data.value });
    },
    checkAnswer: (state, actions) => {
        const answerElement = document.getElementById("testAnswer");
        const answer = answerElement.value;
        const number = state.challengeNumber.replace(/[\s]/g, '');

        answerElement.value = '';
        return actions.markTestAnswer({ correct: answer === number });
    }
};

const Testing = ({ testing, actions }) => {
    let testGame;
    const {
        inProgress, range, challengeNumber, ended, time,
        correctAnswers, wrongAnswers, difficulties
    } = testing;

    if (inProgress && !ended) {
        const number = time > 0 ? challengeNumber : ' ';

        testGame = (
            <div>
                <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {number}
                </h1>
                <Input disabled={time > 0}
                       style={{ marginRight: "10px" }}
                       placeholder="Answer..."
                       onKeyPress={e => helpers.handleKeyPress(e, helpers.checkAnswer, testing, actions)}
                       id="testAnswer" />
                <Button disabled={time > 0} color="green" onClick={() => helpers.checkAnswer(testing, actions)}>
                    Submit
                </Button>
                <Button color="instagram" onClick={actions.setTimerToZero}>
                    I'm ready!
                </Button>
            </div>
        );
    } else if (ended) {
        const p = Math.ceil((correctAnswers / (correctAnswers + wrongAnswers)) * 100);
        const face = getEmoji(p);
        const msg = `You got ${correctAnswers} answers right `;
        const accuracy = `with ${ isNaN(p) ? 0 : p }% accuracy ${face}`;

        testGame = (
            <div>
                <Divider />
                <p>Game over! {msg} {accuracy}</p>
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
                            onClick={() => actions.startTest({ timer: actions.testTimerTick })}>
                        New game
                    </Button>
                    <Button color="red" onClick={actions.endTest}>End game</Button>
                    <Dropdown style={{ marginRight: "10px", marginLeft: "5px" }}
                              selection disabled={inProgress}
                              placeholder="difficulty"
                              options={difficulties}
                              onChange={(e, data) => helpers.changeDifficulty(e, data, actions)} />
                    <Dropdown selection disabled={inProgress}
                              placeholder="number of digits"
                              options={range}
                              onChange={(e, data) => helpers.setNumberOfDigits(e, data, actions)} />
                    {testGame}
                </Segment>
                { (inProgress && time >= 0) ?
                    <Segment>
                        <div>
                            <h2>
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                &nbsp;&nbsp;
                                {time}
                            </h2>
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
