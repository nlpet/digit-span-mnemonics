import { merge } from 'ramda';

const navigation = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return merge(state, { mode: action.payload.mode });
    default:
      return state;
  }
};

export default navigation;
