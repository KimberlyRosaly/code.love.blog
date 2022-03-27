// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// N A V I G A T I O N  B A R
const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to={'/'}>
                    s t a r t  o v e r
                </Link></li>
                <li><Link to={'/loves'}>
                    g o  h o m e
                </Link></li>
                <li><Link to={'/loves/code'}>
                    g o  c o d e
                </Link></li>
                <li><Link to={'/loves/code/blogs'}>
                    g o  b l o g
                </Link></li>
            </ul>
        </div>
    )
}
export default Navigation;