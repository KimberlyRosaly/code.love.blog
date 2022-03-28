// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';

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
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW CHILDREN COMPONENTS | NESTED ROUTING */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
<div ref={dummyDiv}></div>
        </div>
    )
}
export default Code;