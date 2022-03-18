// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { sanitize } from 'dompurify'
// PREVENT CROSS-SITE SCRIPTING (XSS) INJECTION ATTACKS
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// F U N C T I O N A L   C O M P O N E N T
const BlogPost = (props) => {
    return (
        <div className='b-post-container'>
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div className='b-post-heading'>
                <div className='b-post-image' style={{ backgroundImage: `url(${props.blog.image})` }} />            
                <div className='b-post-title'>{props.blog.title}</div>
            </div>
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div className='b-post-content' dangerouslySetInnerHTML={{ __html: sanitize(props.blog.content) }} />
                {/* A SINGLE BLOG'S CONTENT WILL LIVE HERE */}
                {/* HTML INJECTION SANITIZED TO HELP PREVENT XSS ATTACKS */}
                {/* TEXT SET DANGEROUSLY BECAUSE OF DESIRED HTML FORMATTING WANTING TO BE RENDERED */}            
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        </div>
    )
}
export default BlogPost;