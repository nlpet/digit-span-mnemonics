import * as actionTypes from '../constants/actionTypes';



export const markChallengeAnswer = ({ correct, answer }) => ({
    type: actionTypes.MARK_CHALLENGE_ANSWER,
    payload: { correct, answer }
});

export const markTestAnswer = ({ correct }) => ({
    type: actionTypes.MARK_TEST_ANSWER,
    payload: { correct }
})

export const challengeTimerTick = () => ({
    type: actionTypes.CHALLENGE_TIMER_TICK,
    payload: { }
});

export const testTimerTick = () => ({
    type: actionTypes.TEST_TIMER_TICK,
    payload: { }
});

export const toggleTimer = () => ({
    type: actionTypes.TOGGLE_TIMER,
    payload: { }
});

export const changeChallengeDifficulty = ({ level }) => ({
    type: actionTypes.CHANGE_CHALLENGE_DIFFICULTY,
    payload: { level }
});

export const changeTestDifficulty = ({ level }) => ({
    type: actionTypes.CHANGE_TEST_DIFFICULTY,
    payload: { level }
});

export const setNumberOfDigits = ({ numberOfDigits }) => ({
    type: actionTypes.SET_NUMBER_OF_DIGITS,
    payload: { numberOfDigits }
});

export const endChallenge = () => ({
    type: actionTypes.END_CHALLENGE,
    payload: { }
});

export const endPractice = () => ({
    type: actionTypes.END_PRACTICE,
    payload: { }
});

export const toggleFeedback = () => ({
    type: actionTypes.TOGGLE_FEEDBACK,
    payload: { }
});

export const startTest = ({ timer }) => ({
    type: actionTypes.START_TEST,
    payload: { timer }
});

export const endTest = () => ({
    type: actionTypes.END_TEST,
    payload: { }
});

export const generateNumber = () => ({
    type: actionTypes.GENERATE_NEW_NUMBER,
    payload: { }
});

export const setTimerToZero = () => ({
    type: actionTypes.SET_TIMER_TO_ZERO,
    payload: { }
});
