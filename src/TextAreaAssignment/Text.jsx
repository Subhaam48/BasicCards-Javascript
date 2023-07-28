import React, { useRef, useState } from 'react'

const Text = () => {
    // const[name,setname]=useState('')
    const[count,setcount]=useState(1)
    const[finalCount,setfinalCount]=useState(0)
    const[wordcount,setwordcount]=useState(0)
  let text=useRef('')

    const HnadleData=(e)=>{
        if(e.key !== "Backspace"){
             setcount(count+1)
      setfinalCount(count)
      text.current.focus()  
    }
    else{
        return count
    } 
    if(e.key==="space"){
        setwordcount()
    }
    else{
       return count
    }
    
        }
       
    
    // const Handleclick=()=>{
       
    // }


  return (
    <div>
        <h4>TotalCount:{finalCount}</h4>
        {/* <textarea name="" id="" cols="30" rows="10"  onChange={HandleText}></textarea> */}
        <textarea type="text"  onKeyDown={HnadleData} ref={text}/>
        <h3>wordCount:{wordcount}</h3>
        {/* <button>Click</button> */}
    </div>
  )
}

export default Text