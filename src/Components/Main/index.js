import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import SideBar from '../SideBar'
import NavItem from '../NavItem'
import DivSidebar from '../DivSidebar'
import * as S from './styled'

function Main(props) {
    
    function signOut() {
        Auth.signOut({ global: true })
    }
    return (
        <>
            <div className='row'>
                <SideBar>
                    <ul className="nav flex-column">
                        <DivSidebar description="Funcionalidades" />
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
                        {/*    <NavItem
                            description="Novo Escopo"
                            url="/escopo-office-online"
                            target
                            path_1="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            path_2="M14 2v6h6"
                        /> */}
                        <DivSidebar description="Cadastros Basicos" />
                        {/*  <NavItem
                            description="Tipos de Solução"
                            url="/tipos-solucao"
                            path_1="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            path_2="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z"
                        /> */}
                        {/* <NavItem
                            description="Base de Conhecimento"
                            url="/base-conhecimento"
                            path_1="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                            path_2="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                            elipse
                        /> */}
                        <NavItem
                            description="Parametrizacoes"
                            url="/parametrizacoes"
                            path_1="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                            circle
                        />
                        <DivSidebar description="OUTROS" />
                        {/*  <NavItem
                            description="Usuários"
                            url="/escopo-office-online"
                            path_1="M23 21v-2a4 4 0 0 0-3-3.87"
                            path_2="M16 3.13a4 4 0 0 1 0 7.75"
                            path_3="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            circleUsers
                        /> */}
                        <NavItem
                            description="Sair"
                            handlerClick={signOut}
                            url="/"
                            path_1="M18.36 6.64a9 9 0 1 1-12.73 0"
                            path_2="M12 2v10"
                        />
                    </ul>
                </SideBar>
            </div>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <S.TitlePage>{props.titlePage}</S.TitlePage>
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