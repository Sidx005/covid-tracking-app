import React, { useState } from 'react'
import FeatureCards from './FeatureCards'
// import FeatureCards from './FeatureCards'
const Features = () => {
    const [items,setItems]=useState([])
  return (
    <div className='w-full p-20 flex flex-col items-center jsutify-center '>
        <h1 className='font-bold text-white'>
            Features
        </h1>
        <div className="flex flex-col p-5 md:flex-row sm:flex-col lg:flex-row rounded rounded-lg flex flex-col mt-5 gap-5">
            <FeatureCards heading={'Interactive Visuals'} data={['Pie Charts', 'barCharts','BubbleCharts']}  border='border border-yellow-300' color={'bg-transparent'}/>
            <FeatureCards heading={'Covid Data'} data={['Data of over 56 states in US','No of Deaths Covered']}  border='border border-yellow-400' color={'bg-transparent'}/>
            <FeatureCards heading={'Chatbot'} data={['Interactive Chatbot','In-Production']}  border='border border-yellow-300' color={'bg-transparent'}/>
        </div>
    </div>
  )
}

export default Features