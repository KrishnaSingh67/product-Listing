import React from 'react'
import './triangle.css';

const Triangle = () => {
  return (
    <div className='tri-icon'>
      <svg width="12" height="12" viewBox="0 0 100 100">
      <polygon points="50,10 90,90 10,90" fill="black"  />
    </svg>
    </div>
  )
}

export default Triangle
