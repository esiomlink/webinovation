import React, { useState } from 'react';
import GlobalContext from './GlobalContext';


const GlobalcontextProvider = ({ children }) => {
  const [name, setName] = useState('Webinage');

  /** Public **/
  const showMyName = (name) => {
    alert(name);
  };

  /** Public **/
  const alterMyName = () => {
    const names = ['Armand', 'Paul', 'lucie', 'Martine'];
    setName(names[getRandomInt(names.length)]);
    showMyName(name);
  };

  /** Private **/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          name,
          showMyName,
          setName,
          alterMyName,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalcontextProvider;
