import React, { useReducer, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { reducer } from '../reducer/reducer.js';

const Intermediathooks = () => {
  const handleClick = useCallback(function () {
    alert('hello');
  }, []);

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  let navigate = useNavigate();


//!! custom-Hooks

  return (
    <>
      <div className='container'>
        <div>
          <h1>Count: {state.count}</h1>
        </div>
        <div>
          <Button className='button' variant='warning' onClick={handleClick}>
            Say Hello
          </Button>
        </div>
        <div>
          <Button
            variant='primary'
            className='button'
            onClick={() => dispatch({ type: 'decrement' })}
          >
            -
          </Button>
          <Button
            variant='danger'
            className='button'
            onClick={() => dispatch({ type: 'increment' })}
          >
            +
          </Button>
        </div>
        <Button
          className='button'
          variant='warning'
          onClick={() => navigate('/end')}
        >
         End
        </Button>
      </div>
    </>
  );
};

export default Intermediathooks;
