import React, { useState } from 'react'

const Index = () => {
    const data={firstname:'subham',lastname:'pattanayak'}
    const[allData,setallData]=useState(data)

    function HandleData(){
        setallData({...allData,firstname:'sekhar'})
    }
  return (
    <div>
<h3>my first name is {allData.firstname} and last name is {allData.lastname}</h3>       
<button onClick={HandleData}>Update</button>
    </div>
  )
}

export default Index