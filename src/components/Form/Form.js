import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      img: '',
      content: ''  
    }
  }
  
  handleChange = ev => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  submitNewPost = user_id => {
    axios.post(`/api/posts/${user_id}`, {title: this.state.title, img: this.state.img, content: this.state.content})
    this.props.history.push('/dashboard')
  }
  
  render() {
    return (
      <div className='Form' >
        <div className='FormCard' >
          <div>New Post</div>
          <div>
            <div>Title:</div>
            <input  className='LongInput'
                    onChange={this.handleChange}
                    value={this.state.title}
                    name='title' />
          </div>
          <img src={this.state.img || 'https://lh3.googleusercontent.com/proxy/4ZldCgQuJ6V7sXqv25YDVZFrZYZ1QIet7zGGFz0DMuScRQn4JrseonVzfZTjU3oZWMrXnvafo3WVr3R_VtCFsM4GpyfdyxM-W1XrhTCOHrQw_0Q7UqAYIjEc_zRF'} />
          <div>
            <div>Image URL:</div>
            <input  className='LongInput'
                    onChange={this.handleChange}
                    value={this.state.img}
                    name='img' />
          </div>
          <div>
            <div>Content:</div>
            <input  className='LongInput BigInput'
                    onChange={this.handleChange}
                    value={this.state.content}
                    name='content' />
          </div>
          <button onClick={() => this.submitNewPost(this.props.user_id)} >Post</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Form)