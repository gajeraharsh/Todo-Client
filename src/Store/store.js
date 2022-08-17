import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "./Reducers/Reducer";
const rootreducer = combineReducers({
  Reducer,
});

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
