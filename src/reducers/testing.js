// @flow

import {merge} from "ramda";

import {generateChallengeNumber, setDifficulty} from "../utils";

import {
  CHANGE_TEST_DIFFICULTY,
  START_TEST,
  END_TEST,
  TEST_TIMER_TICK,
  MARK_TEST_ANSWER,
  TOGGLE_FLASH_MODE,
  SET_NUMBER_OF_DIGITS,
  SET_TIMER_TO_ZERO,
} from "../constants/actionTypes";

const testing = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_TEST_DIFFICULTY:
      return merge(state, {
        difficulty: action.payload.level,
        time: setDifficulty(action.payload.level, state.numberOfDigits),
      });
    case SET_NUMBER_OF_DIGITS:
      return merge(state, {
        numberOfDigits: action.payload.numberOfDigits,
        time: setDifficulty(state.difficulty, action.payload.numberOfDigits),
      });
    case TOGGLE_FLASH_MODE:
      return merge(state, {
        flashMode: action.payload.checked,
      });
    case START_TEST:
      if (state.intervalId) clearInterval(state.intervalId);

      return merge(state, {
        ended: false,
        inProgress: true,
        intervalId: setInterval(action.payload.timer, 1000),
        time: state.flashMode
          ? state.numberOfDigits * 2 - 1
          : setDifficulty(state.difficulty, state.numberOfDigits),
        challengeNumber: generateChallengeNumber(state.numberOfDigits),
        correctAnswers: 0,
        wrongAnswers: 0,
        roundNum: 1,
      });
    case END_TEST:
      if (state.inProgress) {
        if (state.intervalId) clearInterval(state.intervalId);

        return merge(state, {
          inProgress: false,
          intervalId: null,
          digitIndex: 0,
          time: 0,
          ended: true,
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
            intervalId: null,
          });
        }

        return state;
      }

      return merge(state, {
        time: state.time - 1,
        digitIndex: state.digitIndex + 1,
      });
    case MARK_TEST_ANSWER:
      if (state.roundNum === state.rounds) {
        clearInterval(state.intervalId);

        return merge(state, {
          ended: true,
          inProgress: false,
          intervalId: null,
          correctAnswers: state.correctAnswers + action.payload.correct,
          wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
        });
      }

      return merge(state, {
        correctAnswers: state.correctAnswers + action.payload.correct,
        wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
        time: state.flashMode
          ? state.numberOfDigits * 2 - 1
          : setDifficulty(state.difficulty, state.numberOfDigits),
        digitIndex: 0,
        challengeNumber: generateChallengeNumber(state.numberOfDigits),
        roundNum: state.roundNum + 1,
      });
    case SET_TIMER_TO_ZERO:
      return merge(state, {time: 0});
    default:
      return state;
  }
};

export default testing;
