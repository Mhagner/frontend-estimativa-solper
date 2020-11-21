import React from 'react'
import './style.scss'

const Card = ({ parametrizacao, color, description, title, largura, children, imagem, ...outherProps }) => (
    <div className={`card w-${largura} ${(parametrizacao)?'parametrizacao':''}`}>
        <div className={`card-body border border-${color}`}>
            <h6 className={`card-title title-format text-${color}`}>{title}</h6>
            <h4 className={`card-text title-format text-${color}`} {...outherProps}>{description}</h4>
            {children}
            <div className="row">
                <div className="col-md-4">
                    <img src={imagem} />
                </div>
            </div>
        </div>
    </div>
)

export default Card