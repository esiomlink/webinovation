import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigat = () => {
  return (
    <div className='nav'>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <div className=''>
          <Button variant='warning'>
            <Link to='/'>Home</Link>
          </Button>
          <Button variant='warning'>
            <Link to='/basic'>Basic Hooks</Link>
          </Button>
          <Button variant='warning'>
            <Link to='/inter'>Intermediat Hooks</Link>
          </Button>
        </div>
      </nav> 
    </div>
  );
};

export default Navigat;
