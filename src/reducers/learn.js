import { merge } from 'ramda';

import {
    START_PRACTICE,
    MARK_PRACTICE_ANSWER
} from '../constants/actionTypes';


const learn = (state = {}, action) => {
    switch (action.type) {
        case START_PRACTICE:
            return merge(state, {
                inProgress: true,
                numQuestion: 0,
                correctAnswers: 0,
                wrongAnswers: 0
            });
        case MARK_PRACTICE_ANSWER:
            return merge(state, {
                numQuestion: state.numQuestion + 1,
                correctAnswers: state.correctAnswers + action.payload.correct,
                wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct)
            });
        default:
            return state;
    }
};

export default learn;
