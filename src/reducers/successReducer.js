import { actionTypes } from "../actions";
/**
 * @function sucessReducer
 * @param {array} state - Array guessed words
 * @param {object} action - action to be reduced
 */

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
