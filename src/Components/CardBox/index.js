import React from 'react'
import './style.css'


function CardBox(props) {
    return (
        <div className="card-box" style={{ backgroundColor: props.color }}>
            <p className="title-number">{props.titleNumber}</p>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default CardBox