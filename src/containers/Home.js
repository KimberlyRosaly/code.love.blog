// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom';
// REQUIRED FOR NESTED ROUTE PARENT TO RENDER ITS CHILDREN
import { Link } from 'react-router-dom';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Navigation from '../components/Navigation';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// H O M E  P A G E
const Home = () => {
    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            <Navigation />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        <div className='home-choices' style={{backgroundImage: `url(https://www.dropbox.com/s/csy354hzgirqmgs/KimberlyRosaly.png?raw=1)`}}>
            <Link to={'/loves/code'}>
                <button className='h-c-1'>C O D E</button>
            </Link>
            <Link to={'/loves'}>
                <button className='h-c-2'>A R T</button>
            </Link>
        </div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW N E S T E D   R O U T E CHILDREN COMPONENTS TO RENDER */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        </div>
    )
}
export default Home;