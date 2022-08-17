import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {User, Forum} from './types';

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");

  middlewares.push(createLogger());
}

import { reducer as userReducer } from './user/reducer';
import { forumReducer } from './forum/reducer';

const rootReducer = combineReducers({
  user:userReducer,
  forum:forumReducer
});

export function configureStore(initialState = {}) {
  let store;

  if (process.env.NODE_ENV === "production") {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
  } else {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  }

  return store;
}

export type AppState = {
  user: User
  forum: Forum,
};
