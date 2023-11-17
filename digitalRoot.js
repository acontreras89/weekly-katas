const fn = require('./fn')

const digitalRoot = n => {
  const steps = fn.pipe(
    fn.numberToDigits,
    fn.sum,
    fn.branch(fn.lt(10), fn.identity, digitalRoot)
  )

  return steps(n)
}

module.exports = digitalRoot
