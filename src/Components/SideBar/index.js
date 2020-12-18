import React, {useState, useEffect} from 'react'
import LogoLG from './images/logo_lg.png'
import DivSidebar from '../../Components/DivSidebar'

function SideBar(props) {
    const [user, setUser] = useState()

    useEffect(() => {
        setUser(localStorage.getItem("CognitoIdentityServiceProvider.40kad5tj6r23u1feqtdiv1qi50.LastAuthUser"))
    }, [])

    return (
        <nav className="col-md-2 d-md-block sidebar">
            <div className="container-logo img-fluid">
                <img className="logo_lg img-fluid" src={LogoLG} alt="logo lg" />
            </div>
            <DivSidebar 
                description={`Olá ${user}`} 
            />
            <div className="sidebar-sticky">
                {props.children}
            </div>
        </nav>
    )
}

export default SideBar;