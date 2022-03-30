// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// C O D E   P A G E
const Code = () => {

    const dummyDiv = useRef(null)

    const scrollToBottom = () => {
        dummyDiv.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    })

    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            CODE CONTAINER LIVES HERE ♥
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            <div>
                <div>
                    <a href='https://github.com/KimberlyRosaly'>
                    <button className='h-c-1'>
                            PROJECTS
                    </button>
                    </a>
                </div>
                <div>
                    <Link to={'/loves/code/blogs'}>
                    <button className='h-c-1'>
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