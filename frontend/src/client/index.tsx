import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './layouts';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '../client/store/configureStore';
import { Provider } from 'react-redux';
import { serviceWorker } from './serviceWorker';
// @ts-ignore
const store = configureStore(window.__PRELOADED_STATE__);

// @ts-ignore
delete window.__PRELOADED_STATE__;

serviceWorker();

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <Provider store={store}>
      <Page />
    </Provider>
  </BrowserRouter>
);
