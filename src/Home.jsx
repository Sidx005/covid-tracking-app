import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './assets/Hero'
import Video from './Video'
import ImageSection from './assets/imageSection'
import Typewriter from 'typewriter-effect'
import Features from './assets/Features'
import Slider from './assets/Slider'
import VerticalBar from './VerticalBar'
import Footer from './assets/Footer'

const Home = ({close,setClose,user}) => {
 
  return (
    <div  className='min-h-[100vh] flex flex-col h-full relative  w-screen bg-black'>
      <Navbar close={close} setClose={setClose} user={user}/>
      <VerticalBar display={close} setClose={setClose}/>

      <Hero/>
      <div className="w-full p-5 flex my-10 justify-center items-center">      <Video/>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row sm:flex-col-reverse justify-center items-center p-5 overflow-y-hidden ">
        <div className="text-white flex flex-col text-left mt-10 lg:mt-0 sm:mt-10 md:mt-0  text-wrap overflow-hidden font-bold">
          <h1 className='text-[10px] font-normal'>Track Covid-19 in Real Time</h1>
          <h2>Stay informed Stay Safe</h2>
          <p className=' w-[280px] text-[10px] text-slate-300 font-normal'><Typewriter onInit={typewriter=>typewriter.typeString('Access the latest data on COVID-19 cases, recoveries, and vaccinations. Stay informed and make decisions that protect you and your community.').pauseFor(1).start()}/>

</p>

          </div>
       <div className='overflow-hidden'>
       <ImageSection/>

       </div>
      </div>
      <Features/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home