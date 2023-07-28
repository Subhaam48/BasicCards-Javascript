
// Example1

// import React from 'react'
// import { useState } from 'react'

// const Array = () => {
//     const[items,setitems]=useState([])
//     function AddItems(){
//     setitems([...items,{
//         id:items.length,
//         value:Math.random()
//     }])
//     }
//   return (
//     <div>
//     <ol>
       
//          {items.map((item)=>{
//       return   <li key={items.id}>{item.id}={item.value}</li>
//          })}
      
//     </ol>

//         <button onClick={AddItems}>Add-Item</button>
//     </div>
//   )
// }

// export default Array


//  example2

import React, { useRef, useState } from 'react'
 let Nextid=0;
const Array = () => {
   const textref=useRef()
    const[name,setname]=useState('')
    const [artists,setartists]=useState([])

    function HandleData(){
        textref.current.focus()
        setname('')
        setartists([...artists,{id:Nextid++,
                            name:name
        }])
    }
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} ref={textref}/>
      <button onClick={HandleData}>Add</button>
      <ol>
        {
        artists.map((element,index)=>{
            return  <li key={artists.id}>{element.id} {element.name}</li>
           })
      }
      </ol>
      

    </div>
  )
}

export default Array