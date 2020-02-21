import React from 'react'
import Post from '../Post/Post'
import './Dashboard.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      search: '',
      userPosts: true
    }
  }
  
  render() {
    const allPosts = this.state.posts.map((post, i) => {
      return <Post  key={i}
                    title={post.title}
                    author={post.username}
                    author_profile={post.profile_pic} />
    })
    
    return (
      <>
        <div className='Dashboard'>
          <div >Dashboard</div>
          <input placeholder='Search by title'/>
          <button>Search</button>
          <button>Reset</button>
          <div>
            <div>My Posts</div>
            <input  type='checkbox'
                    value={this.state.userPosts} />
          </div>
        </div>
        {allPosts}
      </>
    )
  }
}

export default Dashboard