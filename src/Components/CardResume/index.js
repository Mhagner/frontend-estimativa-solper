import React from 'react'

function CardResume(props) {
    return (
        <div className={`card border-${props.color} mb-3`}
            style={{ maxWidth: props.widthCard, maxHeight: props.HeightCard }}>
            <div className="card-header">{props.titleHeader}</div>
            <div className={`card-body text-${props.color}`}>
                <h5 className="card-title">{props.value}</h5>
            </div>
        </div>
    )
}

export default CardResume