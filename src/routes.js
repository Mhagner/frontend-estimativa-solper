import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NovaEstimativa from './Pages/NovaEstimativa'
import Estimativas from './Pages/Estimativas'
import TiposSolucao from './Pages/TiposSolucao'
import BancoConhecimento from './Pages/BancoConhecimento'
import Contato from './Pages/Contato'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/nova-estimativa" component={NovaEstimativa} />  
        <Route path="/estimativas" component={Estimativas} />  
        <Route path="/tipos-solucao" component={TiposSolucao} />  
        <Route path="/banco-conhecimento" component={BancoConhecimento} />  
        <Route path="/contato" component={Contato}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes