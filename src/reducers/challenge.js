import { merge } from 'ramda';

import {
    START_CHALLENGE, TIMER_TICK, MARK_CHALLENGE_ANSWER,
    TOGGLE_TIMER
} from '../constants/actionTypes';

const challenge = (state = {}, action) => {
    switch (action.type) {
        case START_CHALLENGE:
            if (state.intervalId) clearInterval(state.intervalId);

            return merge(state, {
                inProgress: true,
                time: 60,
                intervalId: setInterval(action.payload.timer, 1000),
                correctAnswers: 0,
                wrongAnswers: 0,
                answers: [],
                paused: false
            });
        case TIMER_TICK:
            if (state.time === 0) {
                clearInterval(state.intervalId);
                return merge(state, { time: 0 });
            } else if (!state.paused) {
                return merge(state, { time: state.time - 1 });
            }

            return state;
        case TOGGLE_TIMER:
            return merge(state, { paused: !state.paused });
        case MARK_CHALLENGE_ANSWER:
            return merge(state, {
                numQuestion: state.numQuestion + 1,
                correctAnswers: state.correctAnswers + action.payload.correct,
                wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
                answers: [
                    ...state.answers,
                    action.payload.answer
                ]
            });
        default:
            return state;
    }
};

export default challenge;
