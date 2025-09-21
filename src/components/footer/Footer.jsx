import React from 'react'
import './footer.css';
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import Westernunion from '../payment card/Westernunion';
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="f1">
                    <h3 className='hf'><div className="icon">
                        <div className="group400">
                            <span className="group389">
                                <span className="vector"></span>
                            </span>
                        </div>
                    </div>E-Comm</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.!</p>
                </div>
                <div className="follow">
                    <h3>Follow Us</h3>
                    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <span className='imgS'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" /></span>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>
                <div className="f-main">
                    <div className="intro">
                        <h3>i</h3>
                        <p>About Us Infomation Privacy Policy Terms & Conditions</p>
                    </div>
                    <div className="service">
                        <h3>Service</h3>
                        <p>About Us Infomation Privacy Policy Terms & Conditions</p>
                    </div>
                    <div className="account">
                        <h3>My Account</h3>
                        <p>About Us Infomation Privacy Policy Terms & Conditions</p>
                    </div>
                    <div className="offer">
                        <h3>Our Offers</h3>
                        <p>About Us Infomation Privacy Policy Terms & Conditions</p>
                    </div>
                </div>
                <div className="br"></div>
                <div className="bottom">
                    <h4>© 2018 Ecommerce theme by www.bisenbaev.com</h4>
                    <div className="card">
                        <Westernunion/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
