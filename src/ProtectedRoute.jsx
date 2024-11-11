import { onAuthStateChanged } from 'firebase/auth';
import {Children, React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({user,children}) => {
    const navigate=useNavigate()
  if(!user){
   navigate('/login')
   return <p className='text-white'>Please Login</p>
  }
  return children;
}

export default ProtectedRoute