// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom';
// REQUIRED FOR NESTED ROUTE PARENT TO RENDER ITS CHILDREN
import { Link } from 'react-router-dom';
// CLIENT-SIDE ROUTING - PUSHES USER WHERE SPECIFICED
import { useEffect } from 'react';
// ALLOW LIFECYCLE ACCESS WITHIN A HOOK
import { useRef } from 'react';
// ACCESS REFERENCES ON THE DOM WITHIN A HOOK
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Navigation from '../components/Navigation';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// H O M E  P A G E
const Home = () => {

    // = - = - = - = - = - = - = - = - = - = - = - = - = - = - = = - = - = - =  
    // SET AN INITIAL, DEFAULT VALUE ON OUR DOM REFERENCING METHOD TO USE LATER
    const dummyDiv = useRef(null)
    const scrollToBottom = () => { dummyDiv.current?.scrollIntoView({ behavior: "smooth" }) }
    useEffect(() => { scrollToBottom() } )
    // = - = - = - = - = - = - = - = - = - = - = - = - = - = - = = - = - = - =  

    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            <Navigation />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        <div className='home-choices-background' style={{backgroundImage: `url(https://www.dropbox.com/s/csy354hzgirqmgs/KimberlyRosaly.png?raw=1)`}}>
            

                <div className='home-choices' >
                
                    <Link to={'/loves/code'}>
                        <button className='h-c-1'>
                            C O D E
                        </button>
                    </Link>
                
                    <Link to={'/loves/art'}>
                        <button className='h-c-2'>
                            A R T
                        </button>
                    </Link>
        
        </div>
        </div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW N E S T E D   R O U T E CHILDREN COMPONENTS TO RENDER */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            <div ref={dummyDiv}></div>
        </div>
    )
}
export default Home;