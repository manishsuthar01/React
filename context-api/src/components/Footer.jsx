import React, { useContext } from 'react'
import { ContextData } from '../Context/context'

const footer = () => {
    const data=useContext(ContextData)
  return (
    <div>
        footer {data.city}

    </div>
  )
}

export default footer