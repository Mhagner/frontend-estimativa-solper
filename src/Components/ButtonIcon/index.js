import React from 'react'
import { Link } from 'react-router-dom'

const ButtonIcon = ({ type, size, color, children, route, handlerClick }) => {
    return (
        <div className={`col-md-${size}`}>
            <Link
                type={type}
                className={`btn btn-${color}`}
                to={route}
                onClick={handlerClick}
            >
                <div className="icon-button">
                    {children}
                </div>
            </Link>
        </div>
    )
}

export default ButtonIcon