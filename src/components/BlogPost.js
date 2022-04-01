// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useEffect } from 'react';
import { useRef } from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// F U N C T I O N A L   C O M P O N E N T
const BlogPost = (props) => {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    const dummyDiv = useRef(null)
    const scrollToBottom = () => { dummyDiv.current?.scrollIntoView({ behavior: "smooth" }) }
    useEffect( () => {scrollToBottom()} )
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    return (
        <div className='b-post-container'>
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div className='b-post-heading'>
                <div className='b-post-image' style={{ backgroundImage: `url(${props.blog.image})` }} />            
                <div className='b-post-title'>{props.blog.title}</div>
            </div>
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div>{props.blog.content}</div>           
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div ref={dummyDiv} />
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        </div>
    )
}
export default BlogPost;