import React from 'react'
import axios from 'axios'
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
  
  componentDidMount() {
    axios.get(`/api/posts?search=${this.state.search}&userPosts=${this.state.userPosts}`).then(res => {
      this.setState({posts: res.data})
    })
  }

  getAllPosts = () => {
    axios.get(`/api/posts?search=${this.state.search}&userPosts=${this.state.userPosts}`).then(res => {
      this.setState({posts: res.data})
    })
  }

  deletePost = post_id => {
    axios.delete(`/api/posts/${post_id}`).then(res => {
      this.setState({posts: res.data})
    })
  }
  
  handleChange = ev => {
    this.setState({search: ev.target.value})
  }
  
  render() {
    const allPosts = this.state.posts.map((post, i) => {
      return <Post  key={i}
                    title={post.title}
                    author={post.username}
                    content={post.content}
                    author_pic={post.profile_pic}
                    post_id={post.id}
                    deletePost={this.deletePost} />
    })
    
    return (
      <>
      {/* <link src='url' />
      <section>Here's a section</section>
      <script> let test = 2 </script> */}
      
        <div className='Dashboard'>
          <div className='SearchBar' >
            <div className='SearchBarElement' >
              <input  className='SearchInput'
                      onChange={this.handleChange}
                      value={this.state.search}
                      placeholder='Search by post title'/>
              <img  onClick={this.getAllPosts}
                    src='https://static.thenounproject.com/png/101791-200.png'/>
              <button onClick={() => {
                        this.getAllPosts()
                        this.setState({search: '', userPosts: true})
                      }} >Reset</button>
            </div>
            <div className='MyPosts' >
              <div>My Posts</div>
              <input  type='checkbox'
                      onClick={() => this.setState({userPosts: !this.state.userPosts})}
                      value={this.state.userPosts} />
            </div>
          </div>
        <div className='PostDisplay' >
          {allPosts}
        </div>
        </div>
      </>
    )
  }
}

export default Dashboard