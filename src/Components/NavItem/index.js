import React from 'react'
import { Link } from 'react-router-dom'

function NavItem(props) {
    return (
        <>
            <li className="nav-item">
                <Link className={`nav-link ${(props.active)?'active':''}`} to={`${props.url}`}>
                <svg 
						xmlns="http://www.w3.org/2000/svg" 
						xlink="http://www.w3.org/1999/xlink" 
						aria-hidden="true" 
						focusable="false" 
						width="1em" 
						height="1em" 
						preserveAspectRatio="xMidYMid meet" 
						className="feather feather-home"
						viewBox="0 0 24 24">
						
							<g fill="none" 
								stroke="currentColor" 
								stroke-width="2" 
								stroke-linecap="round" 
								stroke-linejoin="round">
								{props.elipse?<ellipse cx="12" cy="5" rx="9" ry="3"/>:''}
								<path d={props.path_1}/>
								<path d={props.path_2}/>
								<path d={props.path_3}/>
							</g>
					</svg>

                    {props.description} 
                  <span className="sr-only">(current)</span>
                </Link>
            </li>
        </>
    )
}

export default NavItem
