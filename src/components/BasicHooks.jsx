import { React, useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { Button } from 'react-bootstrap';

const BasicHooks = () => {
  const { nameData, showMyName, alterMyName } = useContext(GlobalContext);

  const [myState, setMyState] = useState(0);

  const counterUp = () => {
    setMyState(myState + 1);
  };
  const counterUDown = () => {
    setMyState(myState - 1);
  };

  /*   useEffect(() => {
   alert('Bonjour à tous');
  }, []); */

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    document.title = `Compteur: ${myState}`;
  }, [myState]);

  return (
    <>
      <div className='container'> 
        <div>
          <h1>Count: {myState}</h1>
        </div>
        <div>
        <Button onClick={() => counterUp()}>+</Button>
        <Button onClick={() => counterUDown()}>-</Button>
        </div>
        <div>
          <Button variant='warning' onClick={() => showMyName(nameData)}>
            Show my name
          </Button>
          <Button variant='warning' onClick={() => alterMyName()}>
            Alter my name
          </Button>
        </div>
      </div>
    </>
  );
};

export default BasicHooks;
