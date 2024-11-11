import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data,setData]=useState(null);
    const[error,setError]=useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData=async()=>{

           try
            { 
             const fetch=await axios.get(url)
            setData(fetch.data)
            
            }catch(err){
            setError(err)
            }finally{
                setLoading(false)
            }

}
fetchData()    
},[url])
  return {data,error,loading}
}

export default useFetch