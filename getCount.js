const getCount = str => str.match(/[aeiou]/g)?.length ?? 0

module.exports = getCount
