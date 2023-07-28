import React from 'react'
import useCounter from './useCounter'

const Child2 = () => {
    const[count,Increment,Decrement]=useCounter()
  return (
    <div>
       <div style={{marginLeft:"100px"}}>{count}</div>
       <button onClick={Increment} style={{background:'green',color:'red'}}>Increment</button>
       <button onClick={Decrement} style={{background:'red',color:'pink'}}>Decrement</button>
    </div>
  )
}

export default Child2