import React from 'react'
import { Link } from 'react-router-dom'

function NavItem(props) {
    return (
        <>
            <li className="nav-item">
                <Link className={`nav-link ${(props.active)?'active':''}`} to={`${props.url}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  {props.description} 
                  <span className="sr-only">(current)</span>
                </Link>
            </li>
        </>
    )
}

export default NavItem
