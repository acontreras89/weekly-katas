const fn = require('./fn')

// business
const COMPONENTS = ['second', 'minute', 'hour', 'day', 'year']
const LENGTHS = [/*1,*/ 60, 60, 24, 365]

const convertSecondsToUnitArray = seconds =>
  // NOTE acc is initialized with length 1
  LENGTHS.reduce(
    (acc, length, index) => {
      acc.push(Math.floor(acc[index] / length))
      acc[index] %= length
      return acc
    },
    [seconds]
  )

const convertToComponent = (amount, units) =>
  fn.pluralize(amount, COMPONENTS[units])

const formatDuration = fn.branch(
  fn.lte(0),
  fn.value('now'),
  fn.pipe(
    convertSecondsToUnitArray,
    // NOTE do not rely on identity (for else clause) in case we get a negative value
    fn.map(fn.branch(fn.gt(0), convertToComponent, fn.value(0))),
    fn.filter(fn.identity),
    fn.reverse,
    fn.join(', '),
    fn.replaceLast(', ', ' and ')
  )
)

module.exports = formatDuration
