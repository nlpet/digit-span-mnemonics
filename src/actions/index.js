import * as actionTypes from '../constants/actionTypes';

export const changeMode = ({ mode }) => ({
    type: actionTypes.CHANGE_MODE,
    payload: { mode }
});
