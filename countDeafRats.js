const RAT = 'O'
const TAIL = '~'

const getLeftAndRightRats = town => town.split('P')

const reverseString = str => str.split('').reverse().join('')

const countRatsGoingLeft = town => {
  let rats = 0
  for (let i = 0; i <= town.length; i++) {
    const ch = town[i]

    if (ch === RAT) rats++
    // NOTE skip rest of the rat
    if (ch === RAT || ch === TAIL) i++
  }

  return rats
}

const countDeafRats = town => {
  const [left, right] = getLeftAndRightRats(town)

  const allRatsGoingRight = left + reverseString(right)

  return countRatsGoingLeft(allRatsGoingRight)
}

module.exports = countDeafRats
