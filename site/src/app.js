import React from 'react';
import './style.css';

function App(props) {
  return (
    <div>Hello <span>{ props.name }</span>!</div>
  );
}

export default App;