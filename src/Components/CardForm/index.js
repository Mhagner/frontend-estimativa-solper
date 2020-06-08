import React from 'react'

function CardForm(props) {
    return (
        <div className="card">
            <h5 className="card-header">{props.titleCard}</h5>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default CardForm