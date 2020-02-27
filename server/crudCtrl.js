module.exports = {

  getAllPosts: async (req, res) => {
    const {user_id} = req.params
    const {userPosts, search} = req.query
    // console.log('req.params: ', req.params);
    // console.log('req.query: ', req.query);
    const db = req.app.get('db')

    let posts = []
    try {posts = await db.get_all_posts()}
      catch(err) {console.log(err, 'Unable to get posts')}
    
    if(userPosts === "true" && search) {
      let filteredPosts = posts.filter(post => post.title.includes(search))
      return res.status(200).send(filteredPosts)
    }

    if(userPosts === "false" && !search) {
      let filteredPosts = posts.filter(post => post.author_id !== +user_id)
      return res.status(200).send(filteredPosts)
    }

    // if(userPosts === "false" && search) {
    //   let filteredPosts = posts.filter(post => {
    //     let includesSearch = post.includes(search)
    //     if(post.author_id !== +user_id && includesSearch) {
    //       return res.status(200).send(filteredPosts)
    //     }
    //   })
    // }
    
    res.status(200).send(posts)
  },

  createNewPost: async (req, res) => {
    const {user_id} = req.params
    const {title, img, content} = req.body
    const db = req.app.get('db')
    
    await db.create_new_post([title, img, content, user_id])
    
    res.sendStatus(200)
  },
  
  deletePost: async (req, res) => {
    const {post_id} = req.params
    const db = req.app.get('db')

    await db.delete_post([post_id])
    let posts = await db.get_all_posts()

    res.status(200).send(posts)
  }
  
}