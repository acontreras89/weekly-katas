const moveFirstLetterToTheEnd = str => `${str.slice(1)}${str.slice(0, 1)}`

const addAy = str => `${str}ay`

const pigIt = str =>
  str.split(' ').map(moveFirstLetterToTheEnd).map(addAy).join(' ')

module.exports = pigIt
