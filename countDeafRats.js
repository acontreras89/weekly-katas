const PIED_PIPER = 'P'
const RAT = 'O'

const removeWhitespaces = str => str.replace(/\s/g, '')

const reverseString = str => str.split('').reverse().join('')

const getRatsInEachSide = town => town.split(PIED_PIPER)

const countRatsGoingLeft = town => {
  let rats = 0

  for (let i = 0; i <= town.length; i += 2) {
    if (town[i] === RAT) rats++
  }

  return rats
}

const normalizeInput = town => {
  const townWithoutWhitespaces = removeWhitespaces(town)

  const [left, right] = getRatsInEachSide(townWithoutWhitespaces)

  const normalizedRight = reverseString(right)

  return left.concat(normalizedRight)
}

const countDeafRats = town => {
  const allRatsFromLeftToRight = normalizeInput(town)

  return countRatsGoingLeft(allRatsFromLeftToRight)
}

module.exports = countDeafRats
