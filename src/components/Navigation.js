// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// N A V I G A T I O N  B A R
const Navigation = () => {
    return (
        <div>
            <Link to={'/'}>s t a r t  o v e r</Link>
            <br />
            <Link to={'/loves'}>g o  h o m e</Link>
            <br />
            <Link to={'/loves/code'}>g o  c o d e</Link>
        </div>
    )
}
export default Navigation;