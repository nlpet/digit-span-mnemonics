// @flow

import type {Level} from "../types";
import type {Set} from "immutable";

export type TestState = {
  roundNum: number,
  rounds: number,
  intervalId: number,
  inProgress: boolean,
  numberOfDigits: number,
  digitIndex: number,
  flashMode: boolean,
  difficulty: string,
  time: number,
  challengeNumber: null | string,
  range: Array<number>,
  difficulties: Level[],
  ended: false,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export type NavigationState = {
  mode: string,
};

export type LearnState = {
  inProgress: boolean,
  numQuestion: number,
  questionsInSession: number,
  correctAnswers: number,
  wrongAnswers: number,
  help: boolean,
  currentQuestion: Object,
  lastAnswer: Object,
  ended: boolean,
  feedback: boolean,
};

export type Answer = {
  answer: string,
  correct: boolean,
};

export type ChallengeState = {
  inProgress: boolean,
  time: number,
  numQuestion: number,
  correctAnswers: number,
  wrongAnswers: number,
  intervalId: number,
  answers: Answer[],
  uniqueAnswers: Set,
  paused: boolean,
  difficulty: number,
  challengeNumber: null | string,
  ended: boolean,
  levels: Level[],
};
