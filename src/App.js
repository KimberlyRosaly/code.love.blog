// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import './App.css'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Introduction from './containers/Introduction'
import Home from './containers/Home'
import Code from './containers/Code'
import Blog from './containers/Blog'
import Art from './containers/Art'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class App extends React.Component {
  render() {
    return (
      <div className='App'>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduction />} />

            {/* * N E S T E D   R O U T E S-  */}
            {/* PARENT WILL REQUIRE 'O U T L E T' COMPONENT FOR CHILDREN TO RENDER */}
            <Route path="loves" element={<Home />} >

              <Route path="art" element={<Art />} />

              <Route path="code" element={<Code />} >  
                <Route path="blogs" element={<Blog />} />  
              </Route>
            </Route>

          </Routes>
        </BrowserRouter>

{/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      </div>
    )
  }
}
export default App;
