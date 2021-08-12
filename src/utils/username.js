const ADJECTIVES = [
  'boundless',
  'plausile',
  'sleepy',
  'dangerous',
  'slim',
  'purple',
]

const OBJECTS = [
  'puddle',
  'piano',
  'window',
  'bowl',
  'socks',
  'brocolli',
  'chalk'
]

function randomUserName() {
  const first = ADJECTIVES[Math.floor(Math.random() * 7)]
  const last = OBJECTS[Math.floor(Math.random() * 7)]
  return `${first}-${last}`
}

// console.log(randomUserName());

module.exports = randomUserName;