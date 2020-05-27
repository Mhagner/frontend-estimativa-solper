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
                        <NavItem 
                            description="Dashboard" 
                            url="/"
                            path_1="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                            path_2="M12 15l5 6H7l5-6z"
                        />
                        <NavItem 
                            description="Nova estimativa" 
                            url="/nova-estimativa" 
                            path_1="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            path_2="M14 2v6h6"
                        />
                        <NavItem 
                            description="Estimativas realizadas" 
                            url="/estimativas" 
                            path_1="M3 12h18"
                            path_2="M3 6h18"    
                            path_3="M3 18h18"
                        />
                        <NavItem 
                            description="Tipos de Solução" 
                            url="/tipos-solucao" 
                            path_1="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            path_2="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z"    
                        />
                        <NavItem 
                            description="Base de Conhecimento" 
                            url="/banco-conhecimento" 
                            path_1="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                            path_2="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"   
                            elipse 
                        />
                        <NavItem 
                            description="Contato" 
                            url="/contato" 
                            path_1="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                            path_2="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"   
                            elipse 
                        />
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