import React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './components';
import { store } from './store';

export const ReduxDemo = () => (
  <Provider store={store}>
    <h4>Redux Demo!</h4>
    <Counter></Counter>
  </Provider>
);