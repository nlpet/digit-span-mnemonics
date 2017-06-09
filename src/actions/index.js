import * as actionTypes from '../constants/actionTypes';

export const changeMode = ({ mode }) => ({
    type: actionTypes.CHANGE_MODE,
    payload: { mode }
});

export const startPractice = () => ({
    type: actionTypes.START_PRACTICE,
    payload: { }
});

export const markAnswer = ({ correct }) => ({
    type: actionTypes.MARK_ANSWER,
    payload: { correct }
});
