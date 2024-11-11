import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import image from './assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

const Navbar = ({ close, setClose, user }) => {
  const navigate = useNavigate();
  const nav = useRef(null);
  const [userDetail, setDetail] = useState(null);
  const [disp, setDisp] = useState(false);

  const display = () => {
    setClose(!close);
  };

  const fetchUserData = async () => {
    console.log(user);
    // Fetch user data logic
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  useEffect(() => {
    let prevScroll = window.scrollY;
    var scrollHide = () => {
      const currentScroll = window.scrollY;
      if (prevScroll > currentScroll) {
        nav.current.style.top = '0';
      } else {
        nav.current.style.top = '-100px';
      }
      prevScroll = currentScroll;
    };
    window.onscroll = scrollHide;
  }, []);

  return (
    <>
      <div ref={nav} className="w-full z-50 nav transition-all duration-500 ease-in-out bg-[rgba(0,0,0,.3)] flex text-xs backdrop-filter backdrop-blur-sm justify-center items-center gap-10 sticky top-0 left-0 border-2 border-black border-b-[rgba(0,0,0,.5)] p-1">
        <div className='w-10'>
          <img src={image} className='w-10 h-10' alt="" />
        </div>
        <div className="hidden justify-center items-center gap-3 text-white font-medium lg:flex sm:hidden">
          <NavLink className={'p-1 horizontal'} to={'/'}>Home</NavLink>
          <NavLink className={'p-1 horizontal'} to={user ? '/dashboard' : '/login'}>Analytics</NavLink>
          <NavLink className={'p-1 horizontal'} to={'/contact'}>Contact</NavLink>
        </div>
        <div className='text-white'>
          <FontAwesomeIcon onClick={() => { display() }} icon={faBars} />
        </div>
        <div className="flex justify-center gap-3 text-white items-center">
          <p className='cursor-pointer p-1 bg-gradient-to-b from-indigo-800 to-indigo-400 rounded-md' onClick={() => { user ? signOut(auth) : navigate('/login ') }}>{user ? 'Logout' : 'Login'}</p>
          {user ? <div className="group relative">
            <p className='profile group p-2 cursor-pointer rounded-md bg-gradient-to-b from-indigo-600 to-indigo-300 text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out'>
              Profile
            </p>
            <div className="p-4 absolute w-auto -bottom-12 text-xs -left-2  bg-white rounded-md shadow-lg text-black transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div className='flex w-full text-nowrap gap-2 text-sm'><p>E-mail:</p>{user ? user.email : ''}</div>
            </div>
          </div> : ''}
        </div>
      </div>
    </>
  );
};

export default Navbar;
