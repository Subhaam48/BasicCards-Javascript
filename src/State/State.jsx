import React, { useState } from 'react'

const State = () => {
    const [inc,setinc]=useState(0)
    const[dec,setdec]=useState(0)

    function Increment(){
        setinc(()=>inc+1)
    }
    function Decrement(){
        setdec(()=>dec-1)
    }
  return (
    <div>
  <div> Increment:{inc}
  </div>
  <div> Increment:{dec}
  </div>

<button onClick={Increment}>in-cLick</button>
<button onClick={Decrement}>de-click</button>
    </div>
  )
}

export default State