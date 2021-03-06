import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/logo512.png'

const Home = () => {
  const { name } = useContext(GlobalContext);
  return (
    <div className='container'>
      <h1 className='title'>Hello {name}</h1>
      <img src={img} className='img'/>
    </div>
  );
}

export default Home;
