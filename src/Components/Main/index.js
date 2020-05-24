import React from 'react'
import { Link } from 'react-router-dom'

import SideBar from '../SideBar'
import NavItem from '../NavItem'

function Main(props) {
    return (
        <>
            <div classNameName='row'>
                <SideBar>
                    <ul className="nav flex-column">
                        <NavItem description="Dashboard" url="/" />
                        <NavItem description="Nova estimativa" url="/nova-estimativa" />
                        <NavItem description="Estimativas realizadas" url="/estimativas" />
                    </ul>
                </SideBar>
            </div>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h3">{props.titlePage}</h1>
                    {(window.location.pathname === '/estimativas') ?
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <Link className="btn btn-sm btn-success" to="/nova-estimativa">
                                    Nova Estimativa
                                </Link>
                            </div>
                        </div> : ''
                    }
                </div>
                {props.children}
            </main>
        </>

    )
}

export default Main