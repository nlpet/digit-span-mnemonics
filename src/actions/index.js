import * as actionTypes from '../constants/actionTypes';


export const generateNumber = () => ({
    type: actionTypes.GENERATE_NEW_NUMBER,
    payload: { }
});

export const setTimerToZero = () => ({
    type: actionTypes.SET_TIMER_TO_ZERO,
    payload: { }
});
