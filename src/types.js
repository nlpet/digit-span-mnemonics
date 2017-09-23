// @flow

export type HTMLElement = HTMLElement | HTMLInputElement;

export type Level = {
  key: number,
  value: number,
  text: number,
};

export type Action = {
  type: string,
  payload: Object,
};
