// @flow

import test from "ava";
import {contains, values, range} from "ramda";
import {fromJS} from "immutable";

import * as utils from "../src/utils";

test("get a random integer up to n", t => {
  const n = 10;
  const randomInteger = utils.getRandomInteger(n);
  t.true(randomInteger >= 0 && randomInteger <= n);
});

test("generate a string of random integer characters separated by spaces", t => {
  const n = utils.getRandomInteger(10);
  const challengeNumber = utils.generateChallengeNumber(n);
  const challengeNumberNoSpaces = challengeNumber.replace(/[\s]/g, "");

  t.false(
    challengeNumber.length - challengeNumberNoSpaces.length ===
      Math.floor(challengeNumber.length / 2),
  );

  challengeNumberNoSpaces.split("").forEach(ch => {
    t.true(!isNaN(parseInt(ch)));
  });
});

test("generate a step consisting of a question and an answer", t => {
  const step = utils.generateStep();
  const isAQuestionAboutLetterToNum =
    contains("What is an associated letter (or sound) with", step.text) &&
    contains(step.answer, values(utils.numToLettersAndSounds));
  const isAQuestionAboutNumberToLetter =
    contains("What number is associated with", step.text) &&
    contains(step.answer, range(0, 10).map(n => n.toString()));

  t.true(isAQuestionAboutLetterToNum || isAQuestionAboutNumberToLetter);
});

test("generate levels", t => {
  const levels = utils.generateLevels(1, 5);
  const expectedLevels = range(1, 5).map(n => ({
    key: n,
    value: n,
    text: n,
  }));

  t.deepEqual(levels, expectedLevels);
});

test("verify answer", t => {
  t.true(utils.verifyAnswer("none", "2 2"));
  t.false(utils.verifyAnswer("none", "3 0"));
  t.false(utils.verifyAnswer("test", "7 0 1"));
  t.true(utils.verifyAnswer("test", "1 6 1"));
});

test("gets a hint", t => {
  const answersAndHints = fromJS({
    "0": "Answer is 0. Hint: zero vertical strokes",
    "1": "Answer is 1. Hint: one vertical stroke",
    "2": "Answer is 2. Hint: two vertical strokes",
    "3": "Answer is 3. Hint: three vertical strokes",
    "4": "Answer is 4. Hint: four ends with r",
    "5": "Answer is 5. Hint: L is the Roman numeral for 50",
    "6": "Answer is 6. Hint: looks like flipped g",
    "7": "Answer is 7. Hint: k look like two small 7s on their sides",
    "8": "Answer is 8. Hint: script f looks like a figure-8",
    "9":
      "Answer is 9. Hint: p looks like 9 flipped horizontally, b looks like the 9 turned 180°",
  });

  range(0, 10).map(n => {
    n = n.toString();
    t.deepEqual(utils.getHint({single: n}), answersAndHints.get(n));
  });

  t.deepEqual(
    utils.getHint({single: "-999"}),
    "No hint available for -999 :()",
  );

  const nonExistentAnswer = {extra: "0"};
  t.deepEqual(
    utils.getHint(nonExistentAnswer),
    `No hint available for unknown ${JSON.stringify(nonExistentAnswer)}`,
  );

  t.deepEqual(utils.getHint({multiple: ["n"]}), answersAndHints.get("2"));
});

test("set difficulty", t => {
  t.is(utils.setDifficulty("easy", 0), 0);
  t.is(utils.setDifficulty("easy", 8), 7);
  t.is(utils.setDifficulty("medium", 8), 5);
  t.is(utils.setDifficulty("hard", 8), 4);
  t.is(utils.setDifficulty("impossible", 8), 2);

  t.is(utils.setDifficulty("easy", 10), 12);
  t.is(utils.setDifficulty("medium", 10), 10);
  t.is(utils.setDifficulty("hard", 10), 8);
  t.is(utils.setDifficulty("impossible", 10), 6);

  t.is(utils.setDifficulty("non-existent", 10), 10);
});
