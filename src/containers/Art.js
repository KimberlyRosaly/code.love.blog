// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import artData from '../assets/artData';
import ArtGallery from './ArtGallery';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// A R T  ♥  P A G E
const Art = () => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
const dummyDiv = useRef(null)
const scrollToBottom = () => { dummyDiv.current?.scrollIntoView({ behavior: "smooth" }) }
useEffect( () => {scrollToBottom()} )
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (<>
        <div>
            
            <ArtGallery />

        </div>

        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        <div ref={dummyDiv} />
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        
    </>)
}
export default Art;