// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import './App.css'
import Introduction from './containers/Introduction'
import Home from './containers/Home'
import Code from './containers/Code'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {
  render() {
    return (
      <div className='App'>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduction />} />

            {/* * N E S T E D   R O U T E -  */}
            {/* PARENT WILL REQUIRE 'O U T L E T' COMPONENT FOR CHILDREN TO RENDER */}
            <Route path="loves" element={<Home />} >
              <Route path="code" element={<Code />} />  
            </Route>

          </Routes>
        </BrowserRouter>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      </div>
    )
  }
}
export default App;
