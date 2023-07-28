import React, { useContext } from 'react'
import { usercontext } from './ContexApi'

const Child = () => {
    let data=useContext(usercontext)
  return (
    <div>
      
        {data}
    </div>
  )
}

export default Child