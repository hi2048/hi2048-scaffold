import React from 'react';
import { Provider } from 'react-redux';
import { Counter } from './components';
import { store } from './store';

export const ReduxDemo = () => (
  <Provider store={store}>
    Redux Demo!
    <Counter></Counter>
  </Provider>
);