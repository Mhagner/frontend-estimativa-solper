import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NovaEstimativa from './Pages/NovaEstimativa'
import Estimativas from './Pages/Estimativas'
import TiposSolucao from './Pages/TiposSolucao'
import BaseConhecimento from './Pages/BaseConhecimento'
import Parametrizacoes from './Pages/Parametrizacoes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/nova-estimativa" component={NovaEstimativa} />  
        <Route path="/estimativas" component={Estimativas} />  
        <Route path="/tipos-solucao" component={TiposSolucao} />  
        <Route path="/base-conhecimento" component={BaseConhecimento} />  
        <Route path="/parametrizacoes" component={Parametrizacoes}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes