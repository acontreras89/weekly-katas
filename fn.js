// utils
const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value)

const identity = x => x

const not = x => !x

const value = x => () => x

const truthy = value(true)

const falsy = value(false)

const branch = (cond, p1 = identity, p2 = identity) => (...args) =>
  cond(...args) ? p1(...args) : p2(...args)

const log = x => (console.log(x), x)

// object
const update = (key, fn) => obj =>
  Object.assign({}, obj, { [key]: fn(obj[key], key, obj) })

// array
const length = arr => arr.length

const reverse = arr => arr.reverse()

const sort = fn => arr => arr.sort(fn)

const map = fn => arr => arr.map(fn)

const filter = fn => arr => arr.filter(fn)

// NOTE improved to be usable with string args, too
// const reduce = (fn, value) => arr => arr.reduce(fn, value)
const reduce = (fn, value) => arr => Array.prototype.reduce.call(arr, fn, value)

const concat = (arr, v) => arr.concat(v)

// string
const toLowerCase = str => str.toLowerCase()

const split = ch => str => str.split(ch)

const join = ch => arr => arr.join(ch)

const pluralize = (count, name) => `${count} ${name + (count > 1 ? 's' : '')}`

const replace = (target, replacement) => str => str.replace(target, replacement)

const reverseStr = pipe(split(''), reverse, join(''))

// pipe(reverseStr, replace(reverseStr(target), reverseStr(replacement)), reverseStr)
const replaceLast = (target, replacement) => str => {
  const index = str.lastIndexOf(',')
  return index >= 0
    ? str.slice(0, index) + replacement + str.slice(index + target.length)
    : str
}

const traverseStr = fn => pipe(split(''), map(fn), join(''))

const mapWords = fn => pipe(split(' '), map(fn), join(' '))

// math
const add = (a, b) => a + b

const substract = (a, b) => a - b
const sub = substract

const difference = (n1, n2) => Math.abs(sub(n1, n2))

const multiply = a => b => a * b
const mult = multiply

const eq = a => b => a === b

const gt = right => left => left > right

const gte = right => left => left >= right

const lt = right => left => left < right

const lte = right => left => left <= right

const possitive = n => Math.max(0, n)

const sum = reduce(add, 0)

const sumLt = n => pipe(sum, lt(n))

const divisionBy = divisor => dividend => dividend / divisor

const avg = arr => pipe(sum, divisionBy(arr.length))(arr)

const numberToDigits = pipe(String, split(''), map(Number))

const digitsToNumber = pipe(join(''), Number)

// advanced (use at your own risk)
// REVIEW this is iterating over the entire array
const takeWhile = cond =>
  reduce((acc, v) => (cond(v) ? concat(acc, v) : acc), [])

const countUntil = n => m => (n -= m) > 0

module.exports = {
  pipe,
  identity,
  not,
  value,
  truthy,
  falsy,
  branch,
  log,
  update,
  length,
  reverse,
  sort,
  map,
  filter,
  reduce,
  concat,
  toLowerCase,
  split,
  join,
  pluralize,
  replace,
  reverseStr,
  replaceLast,
  traverseStr,
  mapWords,
  add,
  substract,
  sub,
  difference,
  multiply,
  mult,
  eq,
  gt,
  gte,
  lt,
  lte,
  possitive,
  sum,
  sumLt,
  divisionBy,
  avg,
  numberToDigits,
  digitsToNumber,
  takeWhile,
  countUntil,
}
