import { React, useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { Button } from 'react-bootstrap';

const BasicHooks = () => {
  
  
  const [myState, setMyState] = useState(0);
  
  const counterUp = () => {
    setMyState(myState + 1);
  };
  const counterDown = () => {
    setMyState(myState - 1);
  };
  
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    document.title = `Compteur: ${myState}`;
  }, [myState]);
  
  /*   useEffect(() => {
    alert('Bonjour à tous');
  }, []); */
  
  
  
  const { name, showMyName, alterMyName } = useContext(GlobalContext);

  return (
    <>
      <div className='container'>
        <div>
          <h1>Count: {myState}</h1>
        </div>
        <div>
          <Button className='button' onClick={() => counterUp()}>
            +
          </Button>
          <Button className='button' onClick={() => counterDown()}>
            -
          </Button>
        </div>
        <div>
          <Button
            className='button'
            variant='warning'
            onClick={() => showMyName(name)}
          >
            Show my name
          </Button>
          <Button
            className='button'
            variant='warning'
            onClick={() => alterMyName()}
          >
            Alter my name
          </Button>
        </div>
      </div>
    </>
  );
};

export default BasicHooks;
