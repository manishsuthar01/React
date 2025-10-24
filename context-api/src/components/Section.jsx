import React, { useContext } from 'react'
import { ContextData } from '../Context/context'  


const Section = () => {
  const data =useContext(ContextData);
  return (
    <div>
      <h1>section</h1>
      <p>{data.city}</p>
    </div>
  )
}

export default Section  