import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWords from "./guessWordsReducer";
import secretWord from "./guessWordsReducer";

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
