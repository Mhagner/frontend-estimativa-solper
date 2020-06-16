import React from 'react'

const Card = ({ color, description, title, largura, children, ...outherProps }) => (
    <div className={`card w-${largura}`}>
        <div className={`card-body border border-${color}`}>
            <h6 className={`card-title text-${color}`}>{title}</h6>
            <h4 className={`card-text text-${color}`} {...outherProps}>{description}</h4>
            {children}
        </div>
    </div>
)

export default Card