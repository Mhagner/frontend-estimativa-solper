import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NovaEstimativa from './Pages/NovaEstimativa'
import Estimativas from './Pages/Estimativas'
import TiposSolucao from './Pages/TiposSolucao'
import BaseConhecimento from './Pages/BaseConhecimento'
import Parametrizacoes from './Pages/Parametrizacoes'
import Usuarios from './Pages/Usuarios'
import ConfiguracaoEstimativa from './Pages/ConfiguracaoEstimativa'
import Clientes from './Pages/Clientes'
import InfraNuvem from './Pages/InfraNuvem'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nova-estimativa" component={NovaEstimativa} />
        <Route path="/estimativas" component={Estimativas} />
        <Route path="/tipos-solucao" component={TiposSolucao} />
        <Route path="/base-conhecimento" component={BaseConhecimento} />
        <Route path="/escopo-office-online" component={() => {
          window.location.href = 'https://www.office.com/launch/word?auth=2'
          return null
        }} />
        <Route exact path="/parametrizacoes" component={Parametrizacoes} />
        <Route path="/parametrizacoes/usuarios" component={Usuarios} />
        <Route path="/parametrizacoes/estimativa" component={ConfiguracaoEstimativa} />
        <Route path="/parametrizacoes/clientes" component={Clientes} />
        <Route path="/parametrizacoes/infra-nuvem" component={InfraNuvem} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes