import React from 'react'
import './Sidebar.css'
import Box from './box'

const Sidebar = () => {
  
    return (
        <div>
            <div className="Scontainer">
                <Box title={"Hot deals"}>
                    <ul className='box1'>

                        <input type="checkbox" /> <li>Nike <span>2</span></li>
                        <input type="checkbox" /> <li id='airmax'>Airmax <span>48</span></li>
                        <input type="checkbox" /> <li>Nike <span>14</span></li>
                        <input type="checkbox" /><li>Adidas <span>15</span></li>
                        <input type="checkbox" /><li>Vans <span>23</span></li>
                        <input type="checkbox" /><li>All Stars <span>1</span></li>
                        <input type="checkbox" /><li>Adidas <span>95</span></li>
                    </ul>
                </Box>
                <Box className="box2" title={"PRICES"}>
                    <div className="slider">
                        <p>Ranger: <span>$13.99-$25.99</span></p>
                        <div className="bar">
                            <div className="line1"></div>
                            <div className="white1"></div>
                            <div className="white"></div>

                            {/* </div> */}
                        </div>
                    </div>
                </Box>
                <Box title={"COLOR"}>
                    <span className="colors">
                        <span className='c3'><span className='color blue'></span></span>
                        <span className='color red'></span>
                        <span className='color black'></span>
                        <span className='color yellow'></span>
                        <span className='color pink'></span>
                        <span className='color levender'></span>
                    </span>
                </Box>
                <Box title={"BRAND"}>
                    <ul className='box1'>
                        <li>Nike <span>99</span></li>
                        <li id='airmax'>Nike <span>99</span></li>
                        <li>Adidas <span>99</span></li>
                        <li>Siemens <span>99</span></li>
                    </ul>
                </Box>
                <div className="more">
                    <h4>MORE</h4>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
