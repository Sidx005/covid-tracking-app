import React from 'react'
import { Bar } from 'react-chartjs-2'

const Charts = ({ datasets }) => {
  return (
    <div>
        <Bar 
          data={{
            labels: ['Positive', 'Negative'],
            datasets: [{
                label: 'People',
                backgroundColor: ['yellow', 'blue'],
                data: datasets
            }]
          }} 
        />
    </div>
  )
}

export default Charts;
