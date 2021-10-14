const fn = require('./fn')

// if reduce did not work for strings...
// const isIsogram = fn.pipe(
//   fn.toLowerCase,
//   fn.split(''),
//   fn.reduce(
//     (acc, letter, index, arr) => acc && !arr.includes(letter, index + 1),
//     true,
//   )
// )

const isIsogram = fn.pipe(
  fn.toLowerCase,
  fn.reduce(
    (acc, letter, index, str) => acc && !str.indexOf(letter, index), true
  ),
)

export default isIsogram
