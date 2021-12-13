import React, { useReducer, useCallback, useMemo } from 'react';
import { reducer } from '../reducer/reducer.js';

const Intermediathooks = () => {
  const initialState = { count: 0 };

  const handleClick = useCallback(function () {
    alert('hello');
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={handleClick}>Say Hello</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};

export default Intermediathooks;
