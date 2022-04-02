// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'

import artData from '../assets/artData';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// A R T W O R K   INDEX  >  IMAGES  C O M P O N E N T
const Artworks = () => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (
        <div className=''>
        <div class="">
                {artData.map((a) => console.log(a.image_url))}                            
        </div>      
        </div>      
    )
}
export default Artworks;