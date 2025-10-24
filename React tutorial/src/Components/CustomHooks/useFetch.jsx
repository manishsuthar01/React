import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        setloading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setdata(data);
            setloading(false);
        })
    },[url])
  return {data,loading}
}

export default useFetch