import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className='w-full  flex flex-col p-30 items-center justify-evenly'>
        <div className="mt-[20%] md:mt-[10%] lg:mt-[10%] sm:mt-[20%] flex flex-col gap-5 items-center">
            <h1 className='text-white aeonik text-5xl mb-8 font-medium'><Typewriter onInit={(typewriter)=>{
                typewriter.typeString('Covid Tracker').pauseFor(1000).deleteAll().typeString('Covid Tracker').start()
            }}/></h1>
            <div className="flex flex-col justify-center items-center md:flex-row sm:flex-col lg:flex-row gap-3">
                <button onClick={()=>navigate('/dashboard')}  className="bg-gradient-to-b from-indigo-950  to-indigo-500  hover:from-violet-400 hover:to-violet-700  text-white  font-bold text-sm rounded-md w-[120px] p-2">Get started</button>
                <button  className='border hover:bg-white hover:text-black ease font-bold p-2 w-[100px] text-sm rounded-sm border-white text-white '>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Hero