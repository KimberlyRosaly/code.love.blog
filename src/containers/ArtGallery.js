// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import artData from '../assets/artData'
import Artworks from '../components/Artworks'
import Contact from '../components/Contact'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// A R T W O R K S   CONTAINER  C O M P O N E N T
const ArtGallery = () => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (<>

        <div>            
            {/* ART GALLERY */}
            <Artworks />
        </div>

        <div>
            <Contact />
        </div>
  
    </>)
}
export default ArtGallery;