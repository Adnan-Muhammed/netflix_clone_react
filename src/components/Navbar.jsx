


import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import {UserAuth} from '../context/AuthContext'
import { useEffect } from 'react';

function Navbar() {
  const {user, logout} = UserAuth()
  const navigate =useNavigate()
  // console.log(user.email);


  useEffect(()=>{
    console.log(typeof UserAuth);
    console.log('hello');
  },[])
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      {/* Use Link to="/" for navigation */}
      <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {/* <div>
        <Link to="/login">
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to="/signup">
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
      </div> */}


      {user?. email ?( 
       <div>
        <Link to="/account">
          <button className='text-white pr-4'>Account </button>
        </Link>
        <Link >
          <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer'>LogOut </button>
        </Link>
      </div>
      ):( 
      <div>
      <Link to="/login">
        <button className='text-white pr-4'>Sign In</button>
      </Link>
      <Link to="/signup">
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </Link>
    </div>)
    }
    </div>
  );
}

export default Navbar;
