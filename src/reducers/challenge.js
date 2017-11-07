// @flow

import type {Action} from "../types";
import type {ChallengeState} from "./types";

import {merge} from "ramda";
import {Set as set} from "immutable";

import {generateChallengeNumber} from "../utils";
import {initialState} from "../constants";

import {
  START_CHALLENGE,
  CHALLENGE_TIMER_TICK,
  MARK_CHALLENGE_ANSWER,
  TOGGLE_TIMER,
  CHANGE_CHALLENGE_DIFFICULTY,
  END_CHALLENGE,
  GENERATE_NEW_NUMBER,
} from "../constants/actionTypes";

const challenge = (state: ChallengeState, action: Action) => {
  if (!state) return initialState.challenge;
  switch (action.type) {
    case START_CHALLENGE:
      if (state.intervalId != -1) clearInterval(state.intervalId);

      return merge(state, {
        inProgress: true,
        time: 60,
        intervalId: setInterval(action.payload.timer, 1000),
        correctAnswers: 0,
        wrongAnswers: 0,
        answers: [],
        uniqueAnswers: set(),
        paused: false,
        challengeNumber: generateChallengeNumber(state.difficulty),
        ended: false,
      });
    case END_CHALLENGE:
      if (state.inProgress) {
        if (state.intervalId !== -1) clearInterval(state.intervalId);

        return merge(state, {
          inProgress: false,
          intervalId: -1,
          paused: false,
          ended: true,
          time: 0,
        });
      }

      return state;
    case CHALLENGE_TIMER_TICK:
      if (state.time === 0) {
        clearInterval(state.intervalId);
        return merge(state, {time: 0, ended: true, inProgress: false});
      } else if (!state.paused) {
        return merge(state, {time: state.time - 1});
      }

      return state;
    case TOGGLE_TIMER:
      return merge(state, {paused: !state.paused});
    case MARK_CHALLENGE_ANSWER:
      return merge(state, {
        numQuestion: state.numQuestion + 1,
        correctAnswers: state.correctAnswers + action.payload.correct,
        wrongAnswers: state.wrongAnswers + (1 ^ action.payload.correct),
        uniqueAnswers: state.uniqueAnswers.add(action.payload.answer),
        answers: [
          ...state.answers,
          {
            answer: action.payload.answer,
            correct: action.payload.correct,
          },
        ],
      });
    case CHANGE_CHALLENGE_DIFFICULTY:
      return merge(state, {
        difficulty: action.payload.level,
      });
    case GENERATE_NEW_NUMBER:
      return merge(state, {
        challengeNumber: generateChallengeNumber(state.difficulty),
      });
  }
};

export default challenge;
