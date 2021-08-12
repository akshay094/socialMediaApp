const express = require('express')
const {
  createAnonUser,
  getUserByUsername,
  getUserById
} = require('./controllers/users')

const { db } = require('./db/models.js')
const { userRoute } = require('./routes/users/index')
const { postsRoute } = require('./routes/posts')

const app = express();

app.use('/api/users', userRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))
db.sync().then(() => {
  app.listen(8383, () => { console.log('Server Running'); })
}).catch((err) => {
  console.log(err);
})