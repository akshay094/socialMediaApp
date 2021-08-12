const { Users } = require('../db/models')
const { randomUserName } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: randomUserName()
  })
  return user
}

module.exports = {
  createAnonUser
}



