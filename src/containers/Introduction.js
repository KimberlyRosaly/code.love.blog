// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react'
// REPLACES 'COMPONENTDIDMOUNT' LIFECYCLE
import { useNavigate } from 'react-router-dom';
// 'N A V I G A T E' REPLACES 'HISTORY.PUSH'
// REDIRECTS USER TO ANOTHER PAGE IN APPLICATION
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// C U S T O M   H O O K   F U N C T I O N
function Introduction() {
    
    // STORE IT TO USE IT
    let navigate = useNavigate();

    // M Y   F U N C T I O N  TO PUSH A USER TO ANOTHER URL|ROUTE
    function pushUserHome() {
        navigate('/loves')
    }

    // WHEN C O M P O N E N T IS M O U N T E D...
    useEffect(() => {
        // MY FUNCTION IS INVOKED AFTER T I M E  (MILLISECONDS) HAS E L A P S E D
        setTimeout(() => {pushUserHome()}, 1500);
    })

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    return (
        <div>
            ▀▄▀▄▀▄ I N T R O   L I V E S   H E R E ! ▄▀▄▀▄▀
        </div>
    )
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
}
export default Introduction;