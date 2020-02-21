const bcrypt = require('bcryptjs')

module.exports = {

  register: async (req, res) => {
    const {username, password, profile_pic} = req.body
    const db = req.app.get('db')

    let user = await db.check_user([username])
    user = user[0]
    if(user) {
      return res.status(400).send(console.log('Username already exists'))
    }

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    let newUser = await db.register_user([username, hash, profile_pic])
    newUser = newUser[0]
    // req.session.user = newUser

    console.log(`---new user ${username} registered---`)
    res.status(200).send(newUser)
  },

  login: async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')

    let user = await db.check_user([username])
    user = user[0]
    if(!user) {
      return res.status(400).send(console.log('Username not found/registered'))
    }

    const authenticated = bcrypt.compareSync(password, user.password)
    if(authenticated) {
      delete user.password
      // req.session.user = user
      
      console.log(`---user ${username} logged in---`)
      res.status(200).send(user)
    } else {
      res.status(401).send(console.log('Incorrect password'))
    }
  },

  // login:  (req, res) => {},

  // login:  (req, res) => {},
  
}