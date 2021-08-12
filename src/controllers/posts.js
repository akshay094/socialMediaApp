const { Posts, Users } = require('../db/models')

async function createNewPosts(userid, title, body) {
  const post = await Posts.create(
    {
      userid,
      title,
      body
    }
  )
  return post
}

async function showAllPosts(query) {
  const posts = await Posts.findAll({
    include: [Users]
  })
  return posts
}

module.exports = { createNewPosts, showAllPosts }

// testing
/*
async function task() {
  console.log(await createNewPosts(1, 'This is sparta', 'dbkhsaahdsadashkidh'))
  const posts = await showAllPosts();
  console.log(posts);
}

task();
*/