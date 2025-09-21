import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="group491">
        <div className="icon">
          <div className="group400">
            <span className="group389">
              <span className="vector"></span>
            </span>
          </div>
        </div>
        <h3>E-Comm</h3>
      </div>
      <div className="nav">
        <ul>
          <li>HOME</li>
          <li>BAG</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="cart">
        <div className="group394">
          <div className="systemIcon">
            <div className="group">
              <div className="handle2"></div>
              <div className="handle"></div>
              <div className="Cartt">
                <div className="Cartt-inner"></div>
              </div>
              <div className="wheel">
                <div className="leftWheel"></div>
                <div className="rightWheel"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cartValue">
          <span className='c1'>Items</span>
          <span className='c2'>$0.00</span>
        </div>
      </div>
    </div>
  )
}

export default Header
