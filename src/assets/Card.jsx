import React from 'react'

const Card = ({heading,data,color,border}) => {
  return (
    <div className={`${color} ${border} font-bold text-white rounded-md w-[200px] h-[100px] p-2 flex flex-col justify-center items-center`}>
    <h1>{heading}</h1>
   <p>{data}</p>

    </div>  )
}

export default Card