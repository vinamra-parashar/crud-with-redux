import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import root from './reducer'

const store = createStore(root, composeWithDevTools());

export default store;