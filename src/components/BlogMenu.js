// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// F U N C T I O N A L   C O M P O N E N T
const BlogMenu = (props) => {
    return (
        <div className='b-menu'>
            <ul>                        
                {props.blogs.map( (b) => 
                    <li 
                        key={b.id} 
                        className='b-menu-item' 
                        onClick={(event) => props.handleClick(event, b.id)} >
                        {/* 'HANDLECLICK' IS A CLICK EVENT HANDLING FUNCTION ACCESSIBLE VIA PARENT - FUNCTION PASSED DOWN AS PROP */}

                        <h3>BLOGPOST # {b.id}</h3>
                        <p>{b.title}</p>

                    </li> )}                        
            </ul>
        </div>
    )
}
export default BlogMenu;