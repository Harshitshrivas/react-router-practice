import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {
    
    let params = useParams();

  return (
    <div>
        <h1>{params.id} Course Details...</h1>
    </div>
  )
}

export default Coursedetail