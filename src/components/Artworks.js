// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'

import artData from '../assets/artData';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// A R T W O R K   INDEX  >  IMAGES  C O M P O N E N T
const Artworks = () => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (
        <div className='gallery'>
            <div className='gallery-wrapper'>   
                {artData.map((a) => 
                    
                        <img key={a.id} src={a.image_url}></img>
                    
                )}
            </div>      
        </div>      
    )
}
export default Artworks;