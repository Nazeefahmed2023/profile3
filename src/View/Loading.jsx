import React from 'react'
import loading from '../assets/loading.gif';
import '../Style/Loading.css'
export default function Loading() {
  return (
    <>
    <div className="loading">
        <img src={loading} alt="Loading..." className='load' />
    </div>
      
    </>
  )
}
