import React from 'react';

export const CounterComponent = props => {
  const { count, loading, addAction, addAsyncAction, fetchAsyncAction } = props;

  return (
    <>
      Counter: 
      { count }
      {
        loading?(<div>loading...</div>) : ''
      }
      <button onClick={addAction}>Add</button>
      <button onClick={addAsyncAction}>AddAsync</button>
      <button onClick={fetchAsyncAction}>FetchAsync</button>
    </>
  )
}