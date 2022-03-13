import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import blogsData from '../assets/blogsData';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

class Blog extends React.Component {

    state = {
        blogs: [...blogsData],
        justClicked: 0
    }

    handleClick = (event, b) => {
        // console.log(this.state.blogs.find((b) => b.id == 1))
        // console.log(e.target.dataset.bloggie) //<==this sometimes works

        // this.setState({justClicked: e.target.dataset.bloggie})

        console.log("THIS JUSTCLICKED:", this.state.justClicked)
        console.log("THIS JUSTCLICKED:", b)
        this.setState({justClicked: b})
        console.log("THIS.JUSTCLICKED: (after setState)", this.state.justClicked)

    }

    
    render() {

        // console.log("STATE.BLOGS:", this.state.blogs)

      return (
        <div className='b-container'>
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
            BLOG CONTAINER LIVES HERE ♥
{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}    





        <div >            
                    <ul>                        
                        {blogsData.map( (b) => 
                            <li key={b.id} className='b-dropdown-item' onClick={(event) => this.handleClick(event, b.id)} >
                                <h3>BLOGPOST # {b.id}</h3>
                                {b.title}
                            </li> )}                        
                    </ul>
                
        </div>


        </div>
      )
    }
  }
  export default Blog;