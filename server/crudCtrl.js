module.exports = {

  getAllPosts: async (req, res) => {
    const {userid} = req.params
    const {userPosts, search} = req.query
    const db = req.app.get('db')

    let posts = await db.get_all_posts()
    
    if(userPosts && search !== '') {
      let filteredPosts = posts.filter(post => post.includes(search))
      return res.status(200).send(filteredPosts)
    }

    if(!userPosts && search === '') {
      // let filteredPosts = posts.filter(post => post)
      return res.status(200).send(filteredPosts)
    }

    if(!userPosts && search !== '') {
      // let filteredPosts = posts.filter(post => post)
      return res.status(200).send(filteredPosts)
    }
    
    res.status(200).send(posts)
  },


  
}