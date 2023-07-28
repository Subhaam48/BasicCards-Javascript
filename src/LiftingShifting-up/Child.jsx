
//EXAMPLE-1

// import React from 'react'

// const Child = ({data}) => {
//     let name='subham'
//   return (
//     <div>
//    <button onClick={data(name)}>SEND</button>
//     </div>
//   )
// }

// export default Child


//EXAMPLE-2

import React, { useRef, useState } from 'react'

const Child = ({getData}) => {
    const [name,setname]=useState()
    const textRef=useRef('')

    function handleData(e){
        e.preventDefault()
        getData(name)

    }
    function SubmitData(){
       textRef.current.focus()
    //    setname("")
    }
  return (
    <div>
        <form onSubmit={handleData}>
            <label htmlFor="enter your name">UserName:</label>
            <input type='text' value={name} onChange={(e)=> setname(e.target.value)} ref={textRef}></input>
            <button onClick={SubmitData}>Submit</button>
        </form>
    </div>
  )
}

export default Child