const digits = n => String(n).split('').map(Number)

const sum = arr => arr.reduce((acc, n) => acc + n)

function digitalRoot(n) {
  if (n < 10) return n

  return digitalRoot(sum(digits(n)))
}

module.exports = digitalRoot
