// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import artData from '../assets/artData';
import Artworks from '../components/Artworks';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// A R T W O R K S   CONTAINER  C O M P O N E N T
const ArtGallery = () => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (<>
        <div>
            
            {/* ART GALLERY WILL LIVE HERE!!! ♥  */}

            <Artworks />

        </div>

  
    </>)
}
export default ArtGallery;