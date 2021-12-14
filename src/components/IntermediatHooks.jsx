import React, { useReducer, useCallback } from 'react';
import { Button } from 'react-bootstrap';

import { reducer } from '../reducer/reducer.js';

const Intermediathooks = () => {
  const initialState = { count: 0 };

  const handleClick = useCallback(function () {
    alert('hello');
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
        <div>
          <h1>Count: {state.count}</h1>
        </div>
        <div>
          <Button variant='warning' onClick={handleClick}>
            Say Hello
          </Button>
        </div>
        <Button
          variant='primary'
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </Button>
        <Button
          variant='danger'
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default Intermediathooks;
