// @flow

export type HTMLElement = HTMLElement | HTMLInputElement;

export type Level = {
  key: number,
  value: number,
  text: number,
};

export type DifficultyLevels = "easy" | "medium" | "hard" | "impossible";

export type Difficulty = {
  key: DifficultyLevels,
  value: DifficultyLevels,
  text: DifficultyLevels,
};

export type Action = {
  type: string,
  payload: Object,
};
