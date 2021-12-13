import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Home = () => {
  const { nameData } = useContext(GlobalContext);
  return (
    <div>
      Hello {nameData}
    </div>
  );
}

export default Home;
