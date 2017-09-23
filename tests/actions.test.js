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
