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
        <img className="home-image" src="" />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <div className='home-choices' style={{backgroundImage: `url(https://www.dropbox.com/s/csy354hzgirqmgs/KimberlyRosaly.png?raw=1)`}}>
            <Link to={'/loves/code'}>
                <button>C O D E</button>
            </Link>
                <button>A R T</button>
        </div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW N E S T E D   R O U T E CHILDREN COMPONENTS TO RENDER */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        </div>
    )
}
export default Home;