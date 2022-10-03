const inArray = (array1, array2) =>
  array1.filter(substr => array2.some(str => str.includes(substr))).sort()

module.exports = inArray
