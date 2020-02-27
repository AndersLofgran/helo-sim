import React from 'react'
import './Post.css'

class Post extends React.Component {
  render() {
    const {title, author, author_pic, post_id} = this.props
    return (
      <div className="Post" >
          <div className='PostTitle' > {title} </div>
          <button onClick={() => this.props.deletePost(post_id)} >Delete</button>
          <div className='PostAuthor' >
            <div className='AuthorName' >by {author}</div>
            <img  className='PostImage'
                  src={author_pic} />
          </div>
      </div>
    )
  }
}

export default Post