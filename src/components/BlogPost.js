// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// F U N C T I O N A L   C O M P O N E N T
const BlogPost = (props) => {
    return (
        <div>
            {/* A SINGLE BLOG'S CONTENT WILL LIVE HERE */}
            {props.blog.content}
        </div>
    )
}
export default BlogPost;