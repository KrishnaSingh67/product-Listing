import React from 'react'
import './card.css'


const Card = ({ className, image, name, newPrice, oldPrice, discount }) => {
    return (
        <div className='Pcard'>
            <div className={`Pcard ${className || ""}`}>
                <div className="card-image">
                    <img src={image} alt={name} />
                    <div className="bage">HOT</div>
                </div>
                <div className="card-info">
                    <h3>{name}</h3>
                    <ul className='c'>
                        <li className='yelow'>★</li>
                        <li className='yelow'>★</li>
                        <li className='yelow'>★</li>
                        <li className='yelow'>★</li>
                        <li className='gray'>★</li>
                    </ul>


                    <div className="priging">
                        <span className="new">{newPrice}</span>
                        <span className='old'>{oldPrice}</span>
                        <span className='dis'>{discount}% off</span>
                    </div>

                </div>
                </div>
            </div>
            )
}

            export default Card
