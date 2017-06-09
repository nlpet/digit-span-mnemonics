import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toLower, slice } from 'ramda';
import { Segment, Button, Input, List, Divider, Grid } from 'semantic-ui-react';

import * as actions from '../actions';


const Challenge = ({ games, challenge, actions }) => {
    const answersList = [];
    const {
        inProgress, time, correctAnswers,
        wrongAnswers, answers, paused
    } = challenge;
    const challengeGame = [];
    const len = answers.length > 15 ? Math.ceil(answers.length / 3) : 5;

    const timer = () => actions.timerTick();

    const checkAnswer = () => {
        let correct = true;
        const answerElement = document.getElementById("challengeAnswer");
        const answer = toLower(answerElement.value);

        if (answer.length && !paused) {
            return actions.markChallengeAnswer({ correct, answer });
        }
        return false;
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') checkAnswer();
    };

    answers.forEach((answer, i) => {
        answersList.push(<List.Item key={i}>{answer}</List.Item>);
    });

    if (inProgress) {
        if (time > 0) {
            challengeGame.push(
                <div key="challenge">
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

                    <Button color="green" onClick={checkAnswer}>Submit</Button>
                </div>
            );
        } else {
            const msg = `You got ${correctAnswers} words right! : ]`;

            challengeGame.push(
                <div key="game-over">
                    <Divider />
                    <p>Game over! You got { msg }</p>
                </div>
            );
        }
    }

    return (
        <Segment.Group horizontal key="challenge">
            <Segment>
                <Button color="purple"
                        onClick={() => actions.startChallenge({ timer })}>
                    New game
                </Button>
                { inProgress ?
                    <Button color="yellow" onClick={actions.toggleTimer}>
                        {paused ? "Resume" : "Pause"}
                    </Button> : null
                }
                {challengeGame}
            </Segment>
            <Segment>
                {
                    (inProgress && time > 0) ?
                        <div>
                            <h2>Timer: {time}</h2>
                            <p>
                                <b>Accepted: {correctAnswers}</b><br />
                                <b>Rejected: {wrongAnswers}</b>
                            </p>
                        </div> : null
                }
            </Segment>
        </Segment.Group>
    );
};


Challenge.propTypes = {
    games: PropTypes.object.isRequired,
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
