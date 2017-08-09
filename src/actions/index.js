import * as actionTypes from '../constants/actionTypes';


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
