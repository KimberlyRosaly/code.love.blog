import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import blogsData from '../assets/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import BlogMenu from '../components/BlogMenu'
import BlogPost from '../components/BlogPost'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// B L O G   P A G E
class Blog extends React.Component {
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    state = {
      // INITIAL VALUES UPON LANDING
      blogSelected: false
    }  
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    handleClick = (event, blogID) => {
      // ITERATE THROUGH ALL THE BLOG OBJECTS IMPORTED FROM THE BLOGSDATA FILE
      // GRAB ONTO THE 1 BLOG WITH THE MATCHING ID - GRABBED FROM THE TITLE THE USER CLICKED
      const selectedBlog = blogsData.find((eachBlog) => eachBlog.id == blogID)
      // SET THE STATE PROPERTY TO HANG ONTO THE MATCHING BLOG OBJECT
      this.setState({blogSelected: selectedBlog})
    }
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    scrollToBottom = () => {
      this.dummyDiv.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {
      this.scrollToBottom();
    }
    componentDidUpdate() {
      this.scrollToBottom();
    }
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   
    
    
    // CONDITIONALLY RENDER WHAT SHOWS UP INSIDE THE BLOG PAGE CONTAINER
    render() {
      // IF STATE CONTAINS A PROPERTY HOLDING ONTO A BLOG SELECTION...
      if (this.state.blogSelected) {
        return (
          //* = = = = = = = = = = = = = = = = = = = = = = = = = = = = B L O G
          <div className='b-container'>
            {/* BLOG MENU FEATURING TITLES OF POSTS */}
            <BlogMenu blogs={blogsData} handleClick={this.handleClick} />            
            {/* BLOG CONTENT OF A USER-SELECTED POST */}
            <BlogPost blog={this.state.blogSelected} />

            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div ref={(el) => { this.dummyDiv = el; }} />
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}      
          </div>
          //* = = = = = = = = = = = = = = = = = = = = = = = = = = = = B L O G
      )}
      //  THE BEAUTIFUL DEFAULT LANDING | STATE HAS NOTHING COLLECTED |
      else {
        return (
          //^ = = = = = = = = = = = = = = = = = = = = = = = = = = L A N D I N G
          <div className='b-container'>
            {/* BLOG MENU FEATURING TITLES OF POSTS */}
            <BlogMenu blogs={blogsData} handleClick={this.handleClick} />

            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div ref={(el) => { this.dummyDiv = el; }} />
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}            
          </div>
          //^ = = = = = = = = = = = = = = = = = = = = = = = = = = L A N D I N G
      )}        
    }
}
export default Blog;