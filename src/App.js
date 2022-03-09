// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import './App.css'
import Introduction from './containers/Introduction'
import Home from './containers/Home'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {
  render() {
    return (
      <div className='App'>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/loves" element={<Home />} />
          </Routes>
        </BrowserRouter>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      </div>
    )
  }
}
export default App;
