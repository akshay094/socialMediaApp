const express = require('express')

const { db } = require('./db/models.js')

const app = express();

db.sync({ force: true }).then(() => {
  app.listen(8383, () => { console.log('Server Running'); })
}).catch((err) => {
  console.log(err);
})