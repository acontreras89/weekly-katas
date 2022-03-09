const fn = require('./fn')

const moveZeros = fn.pipe(fn.partition(fn.neq(0)), fn.flat)

/*
const partition = (arr, fn) => {
  const pass = []
  const fail = []

  arr.forEach(item => (fn(item) ? pass.push(item) : fail.push(item)))

  return [pass, fail]
}

// IDEA invert condition (!== 0) and use flat instead of concat
function moveZeros(arr) {
  const [zeros, rest] = partition(arr, item => item === 0)
  return rest.concat(zeros)
}
*/

module.exports = moveZeros
