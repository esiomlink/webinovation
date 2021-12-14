import React, { useState } from 'react';
import GlobalContext from './GlobalContext';


const GlobalcontextProvider = ({ children }) => {
  const [nameData, setNameData] = useState('Webinage');
    const showMyName = (name) => {
      alert(name);
    };
    const alterMyName = () => {
      const name = ['Armand', 'Paul', 'lucie', 'Martine'];
      setNameData(name[getRandomInt(name.length)]);
    };

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };
  return (
    <div>
      <GlobalContext.Provider
        value={{
          nameData,
          showMyName,
          setNameData,
          alterMyName,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalcontextProvider;
