const arrayDiff = (arr1, arr2) => arr1.filter(item => !arr2.includes(item))

module.exports = arrayDiff
