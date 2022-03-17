// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Outlet } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// C O D E   P A G E
const Code = () => {
    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            CODE CONTAINER LIVES HERE ♥
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
{/* ALLOW CHILDREN COMPONENTS | NESTED ROUTING */}
            <Outlet />
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        </div>
    )
}
export default Code;