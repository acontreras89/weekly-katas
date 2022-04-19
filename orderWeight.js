const getWeight = numberString =>
  numberString
    .split('')
    .map(Number)
    .reduce((acc, n) => acc + n)

const sortByWeightOrAlphabetically = (n1, n2) => {
  const w1 = getWeight(n1)
  const w2 = getWeight(n2)
  return w1 === w2 ? n1.localeCompare(n2) : w1 - w2
}

function orderWeight(numbersString) {
  const numberStrings = numbersString.trim().split(/\s+/)

  const sortedNumberStrings = numberStrings.sort(sortByWeightOrAlphabetically)

  return sortedNumberStrings.join(' ')
}

// NOTE alternative, fancier solution but with sacrificed legibility

// const sortByWeightOrAlphabetically = (n1, n2) =>
//   getWeight(n1) - getWeight(n2) || n1.localeCompare(n2)

// const orderWeight = numbersString =>
//   numbersString.trim().split(/\s+/).sort(sortByWeightOrAlphabetically).join(' ')

module.exports = orderWeight
