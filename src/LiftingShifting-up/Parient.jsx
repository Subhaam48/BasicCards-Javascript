import React, { useEffect } from 'react'
import Child from './Child'

//EXAMPLE-----1
// const Parient = () => {
//     const getdata=(name)=>{
//         console.log(name)
//     }
//   return (
//     <div>
//         <Child data={getdata}/>
//     </div>
//   )
// }

// export default Parient

/////EXAMPLE-2


const Parient = () => {
    const recieveData=(name)=>{
        console.log(name)
    }
    useEffect(()=>{
        console.log("componet is rendering")
    })
  return (
    <div>
        <Child getData={recieveData}/>
    </div>
  )
}

export default Parient