import React, { useState } from 'react'

const ToDo = () => {
    const [activity,setactivity]=useState('')
    const [listData,setlistData]=useState([])
    const [edit, setEdit]=useState('');

    function addactivity(){
    setlistData([...listData,activity])
    // console.log(listData)
    setactivity('');
   let id=new Date().getMilliseconds()
   console.log("id ",id)

    // setlistData((listData)=>{
    //     const updatedList=[...listData,activity]
    //     // console.log(updatedList)
       
    //     return updatedList;
    // })
    }
    function removeActivity(i){
        
        const UpdatedListData=listData.filter((element,id)=>{
            return i!==id;
        })
        setlistData(UpdatedListData)
    }
    function EditActivity(){
        if(edit){
            setlistData((pre)=>{
                return pre.map((data)=>{
                    if(data.id===edit){
                        data.listData=activity;
                    }
                })
            })
        } else{
            let obj={
                id:new Date().getMilliseconds(),
                listData:activity
            }
            setlistData((pre)=>{
                return [...pre, obj];
            })
        }
    //    console.log("edit functionality", listData);
    //    console.log("edit functionality", id);
    }
  return (
    <div>ToDo- list
 <input type='text' placeholder='add activity ' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
 <button onClick={addactivity}>Add</button>


 <p className='list-heading'>Here is your To-Do list</p>

 { listData.map((data,i)=>{
    return(
        <>
        <p key={i}>

        <div className='ListDta'> {data} </div>
        <div className='btn-postion'><button onClick={()=>removeActivity(i)}>Remove(-)</button></div>
        <button onClick={EditActivity}>Edit</button>
       
        
        </p>
        </>
    )
 })}
       


       {/* <button>RemoveAll</button> */}
    </div>
  )
}

export default ToDo