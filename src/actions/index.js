import * as actionTypes from '../constants/actionTypes';

export const changeMode = ({ mode }) => ({
    type: actionTypes.CHANGE_MODE,
    payload: { mode }
});

export const startPractice = () => ({
    type: actionTypes.START_PRACTICE,
    payload: { }
});

export const startChallenge = ({ timer }) => ({
    type: actionTypes.START_CHALLENGE,
    payload: { timer }
});

export const markPracticeAnswer = ({ correct }) => ({
    type: actionTypes.MARK_PRACTICE_ANSWER,
    payload: { correct }
});

export const markChallengeAnswer = ({ correct, answer }) => ({
    type: actionTypes.MARK_CHALLENGE_ANSWER,
    payload: { correct, answer }
});

export const timerTick = () => ({
    type: actionTypes.TIMER_TICK,
    payload: { }
});

export const toggleTimer = () => ({
    type: actionTypes.TOGGLE_TIMER,
    payload: { }
});

export const changeDifficulty = ({ level }) => ({
    type: actionTypes.CHANGE_DIFFICULTY,
    payload: { level }
});

export const endChallenge = () => ({
    type: actionTypes.END_CHALLENGE,
    payload: { }
});
