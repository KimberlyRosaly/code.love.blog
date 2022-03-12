// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import blogsData from '../assets/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// B L O G   P A G E
const Blog = () => {
      
    return (
        <div>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            BLOG CONTAINER LIVES HERE ♥
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            {blogsData.map((b) => 
                <div>
                    <h1>{b.title}</h1>
                    <h3>{b.date} | {b.time}</h3>                    
                    <div dangerouslySetInnerHTML={{ __html: `${b.content}` }} />
                    <br />
                </div>
            )}
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
        </div>
    )
}
export default Blog;