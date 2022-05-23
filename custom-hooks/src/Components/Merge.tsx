import React, { SyntheticEvent } from 'react'
import useMergeState from '../Hooks/UseMergeState'

const Merge = () => {
  const state  = useMergeState() 
  const handleSubmit = (e:SyntheticEvent)=>{
    e.preventDefault()
    console.log(state)
  }
  return (
    <div>
           <form onSubmit={handleSubmit} >
       <input name='username' type="text" placeholder='Enter Username' />
       <input name='email' type="email" placeholder='Enter Email' />
       <input name='password' type="password" placeholder='Enter Password' />
       <input type="submit" value="submit" />
     </form>

    </div>
  )
}

export default Merge