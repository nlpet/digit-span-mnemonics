// @flow

import type {Mode} from "../reducers/types";

import * as actionTypes from "../constants/actionTypes";

export const changeMode = ({mode}: {mode: Mode}): Action => ({
  type: actionTypes.CHANGE_MODE,
  payload: {mode},
});

export const startPractice = (): Action => ({
  type: actionTypes.START_PRACTICE,
  payload: {},
});

export const startChallenge = ({timer}: {timer: number}): Action => ({
  type: actionTypes.START_CHALLENGE,
  payload: {timer},
});

export const markPracticeAnswer = ({
  correct
  answer,
  correctAnswer,
}: {
  correct: boolean,
  answer: string,
  correctAnswer: string,
}): Action => ({
  type: actionTypes.MARK_PRACTICE_ANSWER,
  payload: {correct, answer, correctAnswer},
});

export const markChallengeAnswer = ({
  correct,
  answer,
}: {
  correct: boolean,
  answer: string,
}): Action => ({
  type: actionTypes.MARK_CHALLENGE_ANSWER,
  payload: {correct, answer},
});

export const markTestAnswer = ({correct}: {correct: boolean}): Action => ({
  type: actionTypes.MARK_TEST_ANSWER,
  payload: {correct},
});

export const challengeTimerTick = (): Action => ({
  type: actionTypes.CHALLENGE_TIMER_TICK,
  payload: {},
});

export const testTimerTick = (): Action => ({
  type: actionTypes.TEST_TIMER_TICK,
  payload: {},
});

export const toggleTimer = (): Action => ({
  type: actionTypes.TOGGLE_TIMER,
  payload: {},
});

export const toggleFlashMode = (checked: boolean): Action => ({
  type: actionTypes.TOGGLE_FLASH_MODE,
  payload: {checked},
});

export const changeChallengeDifficulty = ({
  level,
}: {
  level: number,
}): Action => ({
  type: actionTypes.CHANGE_CHALLENGE_DIFFICULTY,
  payload: {level},
});

export const changeTestDifficulty = ({level}: {level: number}): Action => ({
  type: actionTypes.CHANGE_TEST_DIFFICULTY,
  payload: {level},
});

export const setNumberOfDigits = ({
  numberOfDigits,
}: {
  numberOfDigits: number,
}): Action => ({
  type: actionTypes.SET_NUMBER_OF_DIGITS,
  payload: {numberOfDigits},
});

export const endChallenge = (): Action => ({
  type: actionTypes.END_CHALLENGE,
  payload: {},
});

export const endPractice = (): Action => ({
  type: actionTypes.END_PRACTICE,
  payload: {},
});

export const toggleFeedback = (): Action => ({
  type: actionTypes.TOGGLE_FEEDBACK,
  payload: {},
});

export const startTest = ({timer}: {timer: number}): Action => ({
  type: actionTypes.START_TEST,
  payload: {timer},
});

export const endTest = (): Action => ({
  type: actionTypes.END_TEST,
  payload: {},
});

export const generateNumber = (): Action => ({
  type: actionTypes.GENERATE_NEW_NUMBER,
  payload: {},
});

export const setTimerToZero = (): Action => ({
  type: actionTypes.SET_TIMER_TO_ZERO,
  payload: {},
});
