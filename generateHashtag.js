const fn = require('./fn')

const generateHashtag = fn.pipe(
  fn.getWords,
  fn.map(fn.capitalize),
  fn.join(''),
  fn.branch(
    fn.eq(''),
    fn.falsy,
    fn.pipe(fn.prefix('#'), fn.branch(fn.pipe(fn.length, fn.gt(140)), fn.falsy))
  )
)

module.exports = generateHashtag
