import React, { useState } from 'react';
import { Counter } from './counter';

export const hoc = (Counter) => () => {
  const [count, setCount] = useState(0);

  return (<div>
    component count:
    <Counter count={ count }></Counter>
    <button onClick={ e => setCount(count + 1) }>HOC ADD</button>
  </div>)
};

export const HocDemo = hoc(Counter);