// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Route, Switch } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import './App.css'
import Introduction from './containers/Introduction'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {
  render() {
    return (
      <div>
        LET'S GET STARTED!
        <Introduction />
      </div>
    )
  }
}

export default App;
