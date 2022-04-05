// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom';

// C O D E   P A G E
const Code = () => {
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    const dummyDiv = useRef(null)
    const scrollToBottom = () => { dummyDiv.current?.scrollIntoView({ behavior: "smooth" }) }
    useEffect(() => { scrollToBottom() })
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            <div className='code-choice-container'>

                <div className='c-c-1'>
                    <a href='https://github.com/KimberlyRosaly'>
                    <button>
                            PROJECTS
                    </button>
                    </a>
                </div>

                <div className='c-c-2'>
                    <Link to={'/loves/code/blogs'}>
                    <button>
                            BLOG
                    </button>
                    </Link>
                </div>

            </div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW CHILDREN COMPONENTS | NESTED ROUTING */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
<div ref={dummyDiv}></div>
        </div>
    )
}
export default Code;