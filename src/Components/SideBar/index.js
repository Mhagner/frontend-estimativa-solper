import React from 'react'
import LogoLG from './images/logo_lg.png'

function SideBar(props) {
    return (
        <nav className="col-md-2 d-md-block sidebar">
            <div className="container-logo img-fluid">
                <img className="logo_lg img-fluid" src={LogoLG} alt="logo lg" />
            </div>
            <div className="sidebar-sticky">
                {props.children}
            </div>
        </nav>
    )
}

export default SideBar;