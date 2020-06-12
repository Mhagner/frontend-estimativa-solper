import React from 'react'

const Card = ({ description, title, largura, children }) => (
    <div className={`card w-${largura}`}>
        <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <h4 className="card-text">{description}</h4>
            {children}
        </div>
    </div>
)

export default Card