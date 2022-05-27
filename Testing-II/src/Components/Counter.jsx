import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
  return (
    <div>
       <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+5)}>ADD</button>
      <button onClick={()=>setCounter(counter-5)}>REDUCE</button>
    </div>
  )
}

export default Counter