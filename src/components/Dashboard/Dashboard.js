import React from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import {connect} from 'react-redux'
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
  
  componentDidMount() {
    console.log(this.props)
    axios.get(`/api/posts/1`).then(posts => {
      this.setState({posts: posts.data})
    })
  }
  
  render() {
    const allPosts = this.state.posts.map((post, i) => {
      return <Post  key={i}
                    title={post.title}
                    author={post.username}
                    author_pic={post.profile_pic} />
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

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard)