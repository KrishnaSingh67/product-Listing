import React from 'react'
import './box.css'
const Box = ({ title, children }) => {
    return (
        <div>
            <div className='boxes'>
                <h4>{title}</h4>
                <div>{children}</div>
            </div>
           
        </div>
    )
}

export default Box
