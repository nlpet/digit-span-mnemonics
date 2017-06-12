import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toLower, slice, repeat } from 'ramda';
import {
    Segment, Button, Input,
    List, Divider, Grid,
    Dropdown, Header
} from 'semantic-ui-react';

import * as actions from '../actions';
import { verifyAnswer, getEmoji } from '../utils';


const Challenge = ({ challenge, actions }) => {
    let challengeGame;
    const answersList = [];
    const {
        inProgress, time, correctAnswers, ended, uniqueAnswers,
        wrongAnswers, answers, paused, challengeNumber,
        levels, difficulty
    } = challenge;
    const len = answers.length > 15 ? Math.ceil(answers.length / 3) : 5;
    const numPlaceholder = repeat('˟', difficulty).join(' ');

    const timer = () => actions.challengeTimerTick();

    const checkAnswer = () => {
        const answerElement = document.getElementById("challengeAnswer");
        const answer = toLower(answerElement.value);

        if (uniqueAnswers.has(answer)) return false;

        if (answer.length && !paused) {
            return actions.markChallengeAnswer({
                correct: verifyAnswer(answer, challengeNumber), answer
            });
        }
        return false;
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') checkAnswer();
    };

    const changeDifficulty = (e, data) => {
        return actions.changeChallengeDifficulty({ level: data.value });
    };

    answers.forEach((item, i) => {
        const style = {
            textDecoration: item.correct ? "none" : "line-through",
            color: item.correct ? "black" : "gray"
        };

        answersList.push(
            <List.Item key={i}>
                <p style={style}>
                    {item.answer}
                </p>
            </List.Item>);
    });

    if (inProgress && time >= 0 && !ended) {
        challengeGame = (
            <div>
                <Divider />
                <Grid columns={3}>
                    <Grid.Column>
                        <List>{slice(0, len, answersList)}</List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>{slice(len, 2 * len, answersList)}</List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>{slice(2 * len, 3 * len, answersList)}</List>
                    </Grid.Column>
                </Grid>

                <br />

                <Input style={{ marginRight: "10px" }}
                       placeholder="Answer..."
                       onKeyPress={handleKeyPress}
                       id="challengeAnswer" />

                <Button disabled={paused}
                        color="green"
                        onClick={checkAnswer}>
                    Submit
                </Button>
            </div>
        );
    } else if (ended) {
        const p = Math.ceil((correctAnswers / (correctAnswers + wrongAnswers)) * 100);
        const face = getEmoji(p);

        const msg = `You got ${correctAnswers} words right, `;
        const accuracy = `with ${ isNaN(p) ? 0 : p }% accuracy ${face}`;

        challengeGame = (
            <div>
                <Divider />
                <p>Game over! { msg } { accuracy }</p>
            </div>
        );
    }

    return (
        <div>
            <Header as="h2">
                Challenge Mode
                <Header.Subheader>
                    Play a game which will test the strength of your association
                    with the numbers and your ability to form words quickly.
                </Header.Subheader>
            </Header>
            <Segment.Group horizontal key="challenge">
                <Segment>
                    <Button color="purple"
                            onClick={() => actions.startChallenge({ timer })}>
                        New game
                    </Button>
                    <Button color="red" onClick={actions.endChallenge}>
                        End game
                    </Button>
                    { inProgress ?
                        <Button color="yellow" onClick={actions.toggleTimer}>
                            {paused ? "Resume" : "Pause"}
                        </Button> : null
                    }
                    <Dropdown selection disabled={inProgress}
                              placeholder="difficulty"
                              options={levels}
                              onChange={changeDifficulty} />
                    {challengeGame}
                </Segment>
                { (inProgress && time >= 0) ?
                    <Segment>
                        <div>
                            <h2 style={{ marginBottom: "22px" }}>
                                {paused ? numPlaceholder : challengeNumber}
                            </h2>
                            <Divider />
                            <h2>Time: {time}</h2>
                            <p>
                                <b>Accepted: {correctAnswers}</b><br />
                                <b>Rejected: {wrongAnswers}</b>
                            </p>
                        </div>
                    </Segment> : null
                }
            </Segment.Group>
        </div>
    );
};


Challenge.propTypes = {
    challenge: PropTypes.object.isRequired,
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
)(Challenge);
