import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NovaEstimativa from './Pages/NovaEstimativa'
import Estimativas from './Pages/Estimativas'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/nova-estimativa" component={NovaEstimativa} />  
        <Route path="/estimativas" component={Estimativas} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes