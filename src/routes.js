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
import NovoCliente from './Pages/NovoCliente'
import AlterarCliente from './Pages/AlterarCliente'
import ClienteDetalhe from './Pages/ClienteDetalhe'
import AlterarEstimativa from './Pages/AlterarEstimativa'
import EstimativaDetalhe from './Pages/EstimativaDetalhe'
import EstimativaDetalheImpressao from './Pages/EstimativaDetalheImpressao'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nova-estimativa" component={NovaEstimativa} />
        <Route exact path="/estimativas" component={Estimativas} />
        <Route path="/tipos-solucao" component={TiposSolucao} />
        <Route path="/base-conhecimento" component={BaseConhecimento} />
        <Route path="/escopo-office-online" component={() => {
          window.location.href = 'https://www.office.com/launch/word?auth=2'
          return null
        }} />
        <Route exact path="/parametrizacoes" component={Parametrizacoes} />
        <Route path="/parametrizacoes/usuarios" component={Usuarios} />
        <Route exact path="/parametrizacoes/estimativa" component={ConfiguracaoEstimativa} />
        <Route exact path="/parametrizacoes/clientes" component={Clientes} />
        <Route exact path="/parametrizacoes/clientes/:id" component={ClienteDetalhe} />
        <Route path="/parametrizacoes/novo-cliente" component={NovoCliente} />
        <Route path="/parametrizacoes/clientes/alterar-cliente/:id" component={AlterarCliente} />
        <Route path="/parametrizacoes/infra-nuvem" component={InfraNuvem} />
        <Route exact path="/estimativas/:id" component={EstimativaDetalhe} />
        <Route exact path="/estimativas/impressao/:id" component={EstimativaDetalheImpressao} />
        <Route exact path="/estimativas/alterar-estimativa/:id" component={AlterarEstimativa} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes