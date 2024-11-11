import React, { useEffect, useState } from 'react'
import useFetch from './Hooks/useFetch'
import Card from './assets/Card'
import { Chart as ChartJs, BarElement, ArcElement,Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import { resolvePath } from 'react-router-dom'
import Navbar from './Navbar'
import VerticalBar from './VerticalBar'

// Register Chart.js components
ChartJs.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement
  
)

const Dashboard = ({close,setClose,user}) => {
  const { data, error, loading } = useFetch('https://api.covidtracking.com/v1/us/daily.json') //Object destructuring
  const { data: states, error: statesError, loading: statesLoading } = useFetch('https://api.covidtracking.com/v1/states/current.json')
  //Rename data to states, error to statesError ...etc to avoid errors,as javascript does not accept duplicate variable names
  
  const [optValue, setValue] = useState('')
  const [death, setDeath] = useState(0)

  useEffect(() => {
    if (states) {
      let totalDeaths = 0;
      for (let i = 0; i < states.length; i++) {
        totalDeaths += states[i].death || 0;      //Calculates death count
      }
      setDeath(totalDeaths);
    }
  }, [states])

  if (loading) return <div>Loading..</div>
  if (error) return <div>{error.message}</div>

  const selectedState = states?.find(state => state.state === optValue)
  const deathCount = selectedState ? selectedState.death : 'Select a state'
  const hospitalized = selectedState ? (selectedState.hospitalized === null ? 'Null' : selectedState.hospitalized) : 'Select a state'
  const discharged = selectedState ? (selectedState.hospitalizedDischarged === null ? 'Null' : selectedState.hospitalizedDischarged) : 'Select a state'

  const options = (e) => {
    setValue(e.target.value)       //To update selected options of the dropdown-box
    console.log(e.target.value)
  }

  const chartLabels = data ? data.map(item => item.dateChecked.split('T')[0]) : []
  const positiveData = data ? data.map(item => item.positive) : []
  const negativeData = data ? data.map(item => item.negative) : []

  return (
    
    <div className='min-h-screen bg-black text-white w-full flex justify-center items-center flex-col '>
 <Navbar close={close} setClose={setClose} user={user}/>
 <VerticalBar  display={close} setClose={setClose}/>
       <h1 className='text-[30px] mt-[10%]  font-bold'>Dashboard</h1>

      <div className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-col items-center md:items-center gap-5 justify-center my-[10%]">
        <Card heading={'No of states'} color={'bg-yellow-400'} data={states.length} /> 
         {/* Display No of states ,passed as a prop  */}
        <Card heading={'Positive Cases: '} color={'bg-green-400'} data={states.reduce((prev, current) => prev + current.positive, 0)} /> 
          {/* Used reduce method to calculate +ve cases,prev is accumulator,curent is current value,0 is inital value given to accumulator  */}
        <Card heading={'Deaths'} data={death} color={'bg-red-500'} />
      </div>

      <div className="container  w-full flex flex-col items-center gap-10 justify-center ">
        <select onChange={options} className='w-[100px] text-black border border-black p-2 rounded-md'>
          <option value="">Select a state</option>
          {states.map((stateMap, index) => (
            <option key={index} value={stateMap.state}>{stateMap.state}</option>
          ))}
        </select>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 justify-items-center items-center grid-cols-1">
          <Card heading={'Death count'} data={deathCount} color={'bg-red-500'} />
          <Card heading={'Hospitalized people:'} data={hospitalized} color={'bg-blue-500'} />
          <Card heading={'Discharged'} data={discharged} color={'bg-green-500'} />
        </div>

        <div className="charts flex w-full justify-center items-center flex-col md:flex-col lg:flex-row sm:flex-col">
          <div className='h-[350px] w-[350px]'>
          <Bar 
            data={{
              labels: data.map((dates)=>dates.dateChecked.split('T')[0]).slice(0,4), 
              datasets: [
                {
                  label: 'Positive ',
                  backgroundColor: '#f87171',
                  data: data.map(neg=>neg.positive).slice(0,15)
                },
                {
                  label: 'Negative ',
                  backgroundColor: '#6ee7b7',
                  data: data.map(neg=>neg.negative).slice(0,15)
                }
              ]
            }}
            options={{
              maintainAspectRatio:false,
              responsive:true
            }}
           
          />
          </div>
          <div className="h-[350px] w-[360px]" >
          <Doughnut  data={
            {
              labels:states?states.map((names)=>(names.state)).slice(0,6):[],
             datasets:[
              {
                label:'Deaths',
                data:states?states.map(deaths=>deaths.death).slice(0,6):[]
             ,
             backgroundColor:['#f17171','#3b82f6','#fef08a','violet','#ec4899','#84cc16'],
             
              },
              
             ]
            
           
            }
          }
          options={
            {
              maintainAspectRatio:false,
              responsive:true
            }
          }/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
