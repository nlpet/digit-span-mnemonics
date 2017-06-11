import { merge } from 'ramda';

import {
    START_PRACTICE,
    MARK_PRACTICE_ANSWER,
    TOGGLE_FEEDBACK,
    END_PRACTICE
} from '../constants/actionTypes';

import { getHint, generateStep } from '../utils';


const learn = (state = {}, action) => {
    switch (action.type) {
        case START_PRACTICE:
            return merge(state, {
                inProgress: true,
                ended: false,
                numQuestion: 1,
                correctAnswers: 0,
                wrongAnswers: 0,
                lastAnswer: {},
                currentQuestion: generateStep()
            });
        case END_PRACTICE:
            if (state.inProgress) {
                return merge(state, { inProgress: false, ended: true });
            }

            return state;
        case MARK_PRACTICE_ANSWER:
            if (state.numQuestion === state.questionsInSession) {
                return merge(state, {
                    inProgress: false,
                    ended: true,
                    correctAnswers: state.correctAnswers + action.payload.correct,
                    wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct)
                });
            }

            return merge(state, {
                numQuestion: state.numQuestion + 1,
                correctAnswers: state.correctAnswers + action.payload.correct,
                wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
                currentQuestion: generateStep(),
                lastAnswer: {
                    answer: action.payload.answer,
                    correct: action.payload.correct,
                    hint: action.payload.correct ? null : getHint(action.payload.correctAnswer)
                }
            });
        case TOGGLE_FEEDBACK:
            return merge(state, { feedback: !state.feedback });
        default:
            return state;
    }
};

export default learn;
