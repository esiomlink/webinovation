import { React, useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const BasicHooks = () => {
  const { nameData, showMyName, alterMyName } = useContext(GlobalContext);


  const [myState, setMyState] = useState(0);

  const counterUp = (): void => {
    setMyState(myState + 1);
  };
  const counterUDown = (): void => {
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
      <button onClick={() => counterUp()}>+</button>
      <button onClick={() => counterUDown()}>-</button>
      <button onClick={() => showMyName(nameData)}>Show my name</button>
      <button onClick={() => alterMyName()}>Alter my name</button>
      <h1>{myState}</h1>
    </>
  );
};

export default BasicHooks;
