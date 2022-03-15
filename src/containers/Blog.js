import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import blogsData from '../assets/blogsData';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// B L O G   P A G E
class Blog extends React.Component {

    state = {
      // INITIAL VALUES UPON LANDING
      blogSelected: false
    }  

    handleClick = (event, blogID) => {
      
    }
    
    // CONDITIONALLY RENDER WHAT SHOWS UP INSIDE THE BLOG PAGE CONTAINER
    render() {
      // IF STATE CONTAINS A PROPERTY HOLDING ONTO A BLOG SELECTION...
      if (this.state.blogSelected) {
        return (
          <div className='b-container'>
            <div>{/* BLOG MENU FEATURING TITLES OF POSTS */}</div>
            <div>{/* BLOG CONTENT OF A USER-SELECTED POST */}</div>
          </div>
      )}
      // STATE HAS NOTHING COLLECTED | THE BEAUTIFUL DEFAULT LANDING
      else {
        return (
          <div className='b-container'>
            <div>{/* BLOG MENU FEATURING TITLES OF POSTS */}</div>
          </div>
      )}        
    }
}
export default Blog;