import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
// Link
const Login = () => {
    const[email,setMail]=useState('')
    const[password,setPassword]=useState('');
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log('User loggedin successfully');
        alert('User logged successfully');
        setMail('')
        setPassword('')
        navigate('/');
        
        }catch(err){
            console.error(err);
            
        }
    }
  return (
    <div className='min-h-screen w-full flex justify-center items-center'> 
        <form className="flex  shadow-sm h-[400px] w-[400px] shadow-gray-400 p-5 rounded-md  gap-5 flex-col">
            <h1 className='text-white font-bold'>Login</h1>
            <label className='text-white' htmlFor="mail">E-mail</label>
            <input onChange={(e)=>setMail(e.target.value)} className='bg-[rgba(0,0,0,.5)] p-2 text-white rounded border border-lg border-purple-500 ' value={email} type="email" id='mail' />         
               <label className='text-white' htmlFor="password">Password</label>
            <input value={password} onChange={e=>setPassword(e.target.value)} className='p-2 text-white rounded border border-purple-400 bg-transparent' type="password" id='password' />
            <button onClick={handleSubmit} className='bg-violet-500 p-2 text-white font-bold rounded-lg'>Login</button>
          <Link to={'/signin'} className="text-white account underline ">Don't have account</Link>
        
        </form>
    </div>
  )
}

export default Login