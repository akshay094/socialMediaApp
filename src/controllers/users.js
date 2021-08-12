const { Users } = require('../db/models')
const { randomUserName } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: randomUserName()
  })
  return user
}

async function getUserById(id) {
  return await Users.findOne({ id })
}


async function getUserByUsername(username) {
  return await Users.findOne({ username })
}

module.exports = {
  createAnonUser,
  getUserByUsername,
  getUserById
}



