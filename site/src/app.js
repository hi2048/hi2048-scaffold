import React from 'react';
import './style.css';
import { random } from 'hi2048-utils';
import { ReduxDemo } from './redux';
import { HookDemo } from './hook';
import { HocDemo } from './hoc';

function App(props) {
  return (
    <div>
      <div>Hello <span>{ props.name }</span>!</div>
      <hr />

      <div>utils <span>{ random(100) }</span></div>
      <hr />

      <ReduxDemo></ReduxDemo>
      <hr />

      <HookDemo></HookDemo>
      <hr />

      <HocDemo></HocDemo>
    </div>
  );
}

export default App;