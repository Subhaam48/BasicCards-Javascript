import React, { useState } from 'react'

function SearchAssignment() {
    let  arr=[
        {id:1,text:"SUBHAM"},  {id:2,text:"KESHAB"},  {id:3,text:"BINOD"},  {id:4,text:"RITESH"},  {id:5,text:"SUBHAM SEKHAR"},
    ]
    let [filterData,setFilterData]=useState(arr);
    function serachHandler(e)
    {
        let serchText=e.target.value
          console.log(serchText)
        let curData=  arr.filter((data)=>{
            return data.text.includes(serchText)
          })
       
        setFilterData(curData)

    }
  return (
       <div className="container">
        <div className="row">
            <div className="col">
              search  <input style={{marginTop:"30px"}} type='text'    onChange={serachHandler}/>
            </div>
        </div>
        <hr/>
        <div className="row">
            {
               filterData.length===0 ? <h1>no match</h1>:
                filterData.map((data)=>{
                    return     <div className="col m-2 " key={data.id}>
                             <div className="card">
                                <div className="card-body">
                                    <p>id:{data.id}</p>
                                    <p>text:{data.text}</p>
                                </div>
                             </div>
                    </div>
                })
            }
          

        </div>
       </div>
  )
}

export default SearchAssignment