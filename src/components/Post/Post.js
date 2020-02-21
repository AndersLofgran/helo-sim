import React from 'react'

class Post extends React.Component {
  render() {
    const {title, author, author_pic} = this.props
    return (
    <div>
      <div>Title: {title}</div>
      <div>OP: {author}</div>
      <img src={author_pic} />
    </div>
    )
  }
}

export default Post