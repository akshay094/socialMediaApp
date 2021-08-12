const { Router } = require('express')
const route = Router()

route.get('/', (req, res) => {
  res.send('Todos : all posts')
})


module.exports = {
  postsRoute: route
}