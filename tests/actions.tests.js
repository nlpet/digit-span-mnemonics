// @flow

import test from "ava";

import * as actions from "../src/actions";
import * as actionTypes from "../src/constants/actionTypes";

test("generate action to change mode (navigation)", t => {
  const mode = "learn";
  const expected = {
    type: actionTypes.CHANGE_MODE,
    payload: {mode},
  };

  t.deepEqual(actions.changeMode({mode}), expected);
});

test("generate action to start practice (learn)", t => {
  const expected = {
    type: actionTypes.START_PRACTICE,
    payload: {},
  };

  t.deepEqual(actions.startPractice(), expected);
});

test("generate action to start challenge (challenge)", t => {
  const timer = 60;
  const expected = {
    type: actionTypes.START_CHALLENGE,
    payload: {timer},
  };

  t.deepEqual(actions.startChallenge({timer}), expected);
});

test("generate action to mark practice answer (learn)", t => {
  const correct = true;
  const answer = "test-answer";
  const correctAnswer = "test-answer";
  const expected = {
    type: actionTypes.MARK_PRACTICE_ANSWER,
    payload: {correct, answer, correctAnswer},
  };

  t.deepEqual(
    actions.markPracticeAnswer({correct, answer, correctAnswer}),
    expected,
  );
});

test("generate action to mark challenge answer (challenge)", t => {
  const correct = true;
  const answer = "test-answer";
  const expected = {
    type: actionTypes.MARK_CHALLENGE_ANSWER,
    payload: {correct, answer},
  };

  t.deepEqual(actions.markChallengeAnswer({correct, answer}), expected);
});
