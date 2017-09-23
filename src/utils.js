// @flow

import type {HTMLElement, Level, LettersAndSoundsToNums, Answer} from "./types";

import {keys, map, range, head, countBy, prop} from "ramda";
import {fromJS} from "immutable";

export const safelyGetHtmlElementAndValue = (
  id: string,
): [string, HTMLElement] => {
  const element = document.getElementById(id);
  const value = element instanceof HTMLInputElement ? element.value : "";
  return [value, element];
};

export const numToLetter = fromJS({
  "0": ["s", "c", "z", "x"],
  "1": ["th", "t", "d"],
  "2": ["n"],
  "3": ["m"],
  "4": ["r"],
  "5": ["l"],
  "6": ["tsch", "sch", "ch", "j", "g", "sh", "c", "cz", "sc", "s", "t", "z"],
  "7": ["ch", "k", "c", "q", "g"],
  "8": ["f", "ph", "v", "gh"],
  "9": ["p", "b", "gh"],
});

export const lettersAndSoundsToNums: LettersAndSoundsToNums = {
  s: {num: "0", example: "assess"},
  "soft c": {num: "0", example: "acid & citrus"},
  z: {num: "0", example: "size"},
  x: {num: "0", example: "xylophone"},
  t: {num: "1", example: "hat"},
  d: {num: "1", example: "dot"},
  th: {num: "1", example: "thing and this"},
  n: {num: "2", example: "hen"},
  m: {num: "3", example: "home"},
  r: {num: "4", example: "row and l in colonel"},
  l: {num: "5", example: "heal"},
  ch: {num: "6", example: "cheese and chef"},
  j: {num: "6", example: "jargon, also z in seizure"},
  "soft g": {num: "6", example: "rage"},
  sh: {
    num: "6",
    example: "shame, also s in tissue & vision and t in ration & equation",
  },
  c: {num: "6", example: "cello and special"},
  cz: {num: "6", example: "Czech"},
  sc: {num: "6", example: "fascist"},
  sch: {num: "6", example: "schwa and eschew"},
  tsch: {num: "6", example: "putsch"},
  k: {num: "7", example: "sky, also ch in loch"},
  "hard c": {num: "7", example: "car"},
  q: {num: "7", example: "square"},
  "hard g": {num: "7", example: "game"},
  f: {num: "8", example: "fan"},
  ph: {num: "8", example: "phone"},
  v: {num: "8", example: "van"},
  gh: {num: "8", example: "laugh"},
  p: {num: "9", example: "pan"},
  b: {num: "9", example: "ban"},
};

export const numToLettersAndSounds = {
  "0": ["s", "soft c", "z", "x"],
  "1": ["t", "d", "th"],
  "2": ["n"],
  "3": ["m"],
  "4": ["r", "l"],
  "5": ["l"],
  "6": ["ch", "j", "soft g", "sh", "c", "cz", "s", "sc", "sch", "tsch"],
  "7": ["k", "hard c", "q", "hard g"],
  "8": ["f", "ph", "v", "gh"],
  "9": ["p", "b"],
};

export const answersAndHints = fromJS({
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

export function getRandomInteger(n: number): number {
  return Math.floor(Math.random() * n);
}

export function generateChallengeNumber(n: number): string {
  return map(getRandomInteger, Array(n).fill(n)).join(" ");
}

export function generateStep() {
  const x = getRandomInteger(2);

  if (x === 1) {
    const num = getRandomInteger(keys(numToLettersAndSounds).length);

    return {
      text: `What is an associated letter (or sound) with ${num}?`,
      answer: numToLettersAndSounds[num],
    };
  }

  const letters = keys(lettersAndSoundsToNums);
  const randomInteger = getRandomInteger(letters.length);
  const letter = letters[randomInteger];
  const example = lettersAndSoundsToNums[letter].example;

  return {
    text: `What number is associated with ${letter} (in ${example})?`,
    answer: lettersAndSoundsToNums[letter].num,
  };
}

export function generateLevels(start: number, end: number): Level[] {
  return map(n => ({key: n, value: n, text: n}), range(start, end));
}

function findMatches(letter: string, string: string): [string, number] {
  const reg = new RegExp(letter, "g");
  const match = string.match(reg);

  if (match) {
    return [string.replace(reg, ""), match.length];
  }

  return [string, 0];
}

export function getTotalMatches(
  letters: Array<string>,
  answer: string,
): [string, number] {
  let totalMatches = 0;
  let matches;

  letters.forEach(l => {
    [answer, matches] = findMatches(l, answer);
    totalMatches += matches;
  });

  return [answer, totalMatches];
}

function removeHs(answer) {
  const reg = new RegExp("(?:[^tscgp])h", "g");

  return answer.replace(reg, "");
}

// TODO: refactor this
export function verifyAnswer(answer: string, challengeNumber: string): boolean {
  let flag = true;
  const challengeNum: Array<string> = challengeNumber
    .replace(/[\s]/g, "")
    .split("");
  const uniqueNums = countBy(x => x)(challengeNum);

  answer = removeHs(answer.replace(/[ywaeiou\s]/g, ""));

  for (let num in uniqueNums) {
    let totalMatches;
    const letters = numToLetter.get(num);

    [answer, totalMatches] = getTotalMatches(letters, answer);

    if (totalMatches !== uniqueNums[num]) flag = false;
  }

  return answer.length === 0 && flag;
}

export function getHint(answer: Answer): string {
  if (answer.single) {
    return answersAndHints.get(
      answer.single,
      `No hint available for ${answer.single} :()`,
    );
  } else if (answer.multiple) {
    const first = head(answer.multiple);
    if (!first) throw new Error("No answers available!");
    const numObj = prop(first, lettersAndSoundsToNums) || {};

    return answersAndHints.get(
      numObj.num,
      `No hint available for ${numObj.num} :o`,
    );
  }

  return `No hint available for unknown ${JSON.stringify(answer)}`;
}

export function setDifficulty(difficulty: string, numberOfDigits: number) {
  let multipliers = {easy: 0.8, medium: 0.6, hard: 0.4, impossible: 0.2};

  if (numberOfDigits > 9) {
    multipliers = map(a => a + 0.4, multipliers);
    return Math.floor(numberOfDigits * multipliers[difficulty]);
  }
  return Math.ceil(numberOfDigits * multipliers[difficulty]);
}

export function getEmoji(p: number) {
  let face = "(╯°□°）╯︵ ┻━┻) ";

  if (p >= 75) {
    face = "◉‿◉";
  } else if (p >= 50) {
    face = "(-‿◦)";
  } else if (p >= 25) {
    face = "¯\\_(ツ)_/¯";
  }

  return face;
}

export function getTimeIcon(time: number) {
  if (time > 40) return "fa fa-hourglass-start";
  else if (time > 20) return "fa fa-hourglass-half";
  else if (time > 10) return "fa fa-hourglass-end";

  return "fa fa-hourglass-o";
}
