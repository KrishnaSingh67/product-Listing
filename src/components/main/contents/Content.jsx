
import React from 'react';
import './content.css'; // Import your CSS file
import shoe from "../../../assets/shose.png";
import Triangle from '../../../assets/triangle';
import hamburger from '../../../assets/hamburger.svg';
import Card from './Card';
import seneker1 from "../../../assets/seneker1.png";
import seneker2 from "../../../assets/seneker2.png";
import seneker3 from "../../../assets/seneker3.png";
import seneker4 from "../../../assets/seneker4.png";
import bag1 from "../../../assets/bag1.png";
import bag2 from "../../../assets/bag2.png";










const Content = () => {
  return (
    <div >
      <div className="container">
        <div className="group-493">
          <div className="text-content">
            <h1>Adidas Men Running Sneakers</h1>
            <span>Performance and design. Taken right to the edge.</span>
            <div className="link">SHOP NOW</div>
            <span className="line"></span>
          </div>
          <span className='imgg'><img src={shoe} alt="Shoe" /></span>
        </div>
        <div className="barr">
          <span className="text">13 Items</span>
          <div className="select1">
            <span className="text">Sort By</span>
            <div className="select-inner">
              <span className="text">Name</span>
              <Triangle />
            </div>
          </div>
          <div className="select1">
            <span className="text">Show</span>
            <div className="select-inner">
              <span className="text">12</span>
              <Triangle />
            </div>
          </div>
          <div className="switchs">
            <div className="switch switch-c">
              <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
            <div className="switch">
              <img src={hamburger} alt="hamberger" />
            </div>
          </div>
        </div>
        <div className="group-499">
          <Card image={seneker1} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
          <Card image={bag1} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
          <Card image={bag2} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
          <Card image={seneker3} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
          <Card image={seneker4} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
          <Card image={seneker2} name={"Nike Air Max 270 React"} newPrice={"$299,43"} oldPrice={"$534,33"} discount={"24"} />
        </div>

        <div className="pagiation">
          <span className="bl3">
          <ul className='pagi'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;