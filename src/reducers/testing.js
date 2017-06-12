import { merge } from 'ramda';

import { generateChallengeNumber, setDifficulty } from '../utils';

import {
    CHANGE_TEST_DIFFICULTY, START_TEST, END_TEST,
    TEST_TIMER_TICK, MARK_TEST_ANSWER, SET_NUMBER_OF_DIGITS
} from '../constants/actionTypes';


const testing = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_TEST_DIFFICULTY:
            return merge(state, {
                difficulty: action.payload.difficulty,
                time: setDifficulty(action.payload.difficulty, state.numberOfDigits)
            });
        case SET_NUMBER_OF_DIGITS:
            return merge(state, {
                numberOfDigits: action.payload.numberOfDigits,
                time: setDifficulty(state.difficulty, action.payload.numberOfDigits)
            });
        case START_TEST:
            if (state.intervalId) clearInterval(state.intervalId);

            return merge(state, {
                ended: false,
                inProgress: true,
                intervalId: setInterval(action.payload.timer, 1000),
                time: setDifficulty(state.difficulty, state.numberOfDigits),
                challengeNumber: generateChallengeNumber(state.numberOfDigits),
                correctAnswers: 0,
                wrongAnswers: 0,
                roundNum: 1
            });
        case END_TEST:
            if (state.inProgress) {
                if (state.intervalId) clearInterval(state.intervalId);

                return merge(state, {
                    inProgress: false,
                    intervalId: null,
                    time: 0,
                    ended: true
                });
            }

            return state;
        case TEST_TIMER_TICK:
            if (state.time === 0) {
                if (state.roundNum === state.rounds) {
                    clearInterval(state.intervalId);

                    return merge(state, {
                        ended: true,
                        inProgress: false,
                        intervalId: null
                    });
                }

                return state;
            }

            return merge(state, { time: state.time - 1 });
        case MARK_TEST_ANSWER:
            if (state.roundNum === state.rounds) {
                clearInterval(state.intervalId);

                return merge(state, {
                    ended: true,
                    inProgress: false,
                    intervalId: null,
                    correctAnswers: state.correctAnswers + action.payload.correct,
                    wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct)
                });
            }

            return merge(state, {
                correctAnswers: state.correctAnswers + action.payload.correct,
                wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
                time: setDifficulty(state.difficulty, state.numberOfDigits),
                challengeNumber: generateChallengeNumber(state.numberOfDigits),
                roundNum: state.roundNum + 1
            });
        default:
            return state;
    }
};

export default testing;
