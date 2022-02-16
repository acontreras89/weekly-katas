const fn = require('./fn')

// REVIEW avoid using the index and original string in reduce (this is no functional-ish)
// IDEA convert to a set and compare lengths
const isIsogram = fn.pipe(
  fn.toLowerCase,
  fn.reduce(
    (acc, letter, index, str) => acc && !str.includes(letter, index + 1),
    true
  )
)

module.exports = isIsogram
