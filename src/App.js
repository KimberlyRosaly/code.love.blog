// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import './App.css'
import Introduction from './containers/Introduction'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {
  render() {
    return (
      <div>
        {/* LET'S GET STARTED! */}
        {/* <Introduction /> */}
        {/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduction />} />
          </Routes>
        </BrowserRouter>

        {/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      </div>
    )
  }
}
export default App;
