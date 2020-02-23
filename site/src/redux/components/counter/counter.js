import React from 'react';

export const CounterComponent = props => {
  const { count, loading, addAction, addAsyncAction } = props;

  return (
    <div>
      Counter: 
      { count }
      {
        loading?(<div>loading...</div>) : ''
      }
      <button onClick={addAction}>Add</button>
      <button onClick={addAsyncAction}>AddAsync</button>
    </div>
  )
}