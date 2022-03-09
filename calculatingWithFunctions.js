const numberOrOperation = n => op => (typeof op === 'function' ? op(n) : n)

const zero = numberOrOperation(0)
const one = numberOrOperation(1)
const two = numberOrOperation(2)
const three = numberOrOperation(3)
const four = numberOrOperation(4)
const five = numberOrOperation(5)
const six = numberOrOperation(6)
const seven = numberOrOperation(7)
const eight = numberOrOperation(8)
const nine = numberOrOperation(9)

const plus = right => left => left + right
const minus = right => left => left - right
const times = right => left => left * right
const dividedBy = right => left => Math.trunc(left / right)

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
}
