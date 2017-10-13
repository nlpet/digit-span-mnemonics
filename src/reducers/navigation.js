// @flow

import type {Action} from "../types";
import type {NavigationState} from "./types";

import {merge} from "ramda";

import {CHANGE_MODE} from "../constants/actionTypes";
import {initialState} from "../constants";

const navigation = (state: NavigationState, action: Action) => {
  if (!state) return initialState.navigation;
  switch (action.type) {
    case CHANGE_MODE:
      return merge(state, {mode: action.payload.mode});
    default:
      return state;
  }
};

export default navigation;
