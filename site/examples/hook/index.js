import React, { useState } from 'react';

export const HookDemo = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      Hook Demo: 
      { count }
      <button onClick={ e => setCount(count + 1) }>Add</button>
    </div>
  )
};