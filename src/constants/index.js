// @flow

import type {InitialState} from "../reducers/types";

import {Set as set} from "immutable";

import {generateLevels} from "../utils";

export const typeConversions = {
  challenge: {
    uniqueAnswers: "Set",
  },
};

export const initialState: InitialState = {
  navigation: {
    mode: "learn",
  },
  learn: {
    inProgress: false,
    numQuestion: 1,
    questionsInSession: 10,
    correctAnswers: 0,
    wrongAnswers: 0,
    help: false,
    currentQuestion: {},
    lastAnswer: {},
    ended: false,
    feedback: false,
  },
  challenge: {
    inProgress: false,
    time: 60,
    correctAnswers: 0,
    numQuestion: 0,
    wrongAnswers: 0,
    intervalId: -1,
    answers: [],
    uniqueAnswers: set(),
    paused: false,
    difficulty: 3,
    challengeNumber: null,
    ended: false,
    levels: generateLevels(2, 11),
  },
  testing: {
    roundNum: 0,
    rounds: 10,
    intervalId: -1,
    inProgress: false,
    numberOfDigits: 5,
    digitIndex: 0,
    flashMode: false,
    difficulty: "easy",
    time: 5,
    challengeNumber: null,
    levels: generateLevels(3, 46),
    difficulties: [
      {key: "easy", value: "easy", text: "easy"},
      {key: "medium", value: "medium", text: "medium"},
      {key: "hard", value: "hard", text: "hard"},
      {key: "impossible", value: "impossible", text: "impossible"},
    ],
    ended: false,
    correctAnswers: 0,
    wrongAnswers: 0,
  },
};
