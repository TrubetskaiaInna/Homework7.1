import React, {Fragment} from 'react'

import './App.css'
import GreetingComponent from './Components/GreetingComponent/GreetingComponent'
import LogotypeComponent from './Components/LogotypeComponent/LogotypeComponent'

function App () {
  return (
    <Fragment>
      <GreetingComponent/>
      <LogotypeComponent/>
    </Fragment>

  )
}

export default App
