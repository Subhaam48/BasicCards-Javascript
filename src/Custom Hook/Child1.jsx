import React from 'react'
import useCounter from './useCounter'

const Child1 = () => {
    const[count,Increment,Decrement]=useCounter(10)
  return (
    <div>
       <div style={{marginLeft:"100px"}}>{count}</div>
       <button onClick={Increment} style={{background:'green',color:'#0fff'}}>Increment</button>
       <button onClick={Decrement} style={{background:'red',color:'#0fff'}}>Decrement</button>
    </div>
  )
}

export default Child1