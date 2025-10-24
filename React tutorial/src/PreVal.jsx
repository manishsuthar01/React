import React, { useState } from 'react'
import usePrev from './Components/CustomHooks/usePrev';

const PreVal = () => {
   const [count,setcount]=useState(0);
   const prevcount=usePrev(count);



  return (
    <div>
    <p>current :{count}</p>
    <p>Previous :{prevcount}</p>
    <button onClick={()=>setcount(count+1)}>Inc</button>
    </div>
  )
}

export default PreVal;