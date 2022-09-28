const RAT = 'O'
const TAIL = '~'

const countDeafRats = town => {
  const [left, right] = town.split('P')

  let rats = 0

  for (let i = 0; i <= left.length; i++) {
    const ch = left[i]

    if (ch === RAT) {
      rats++
      i++
    } else if (ch === TAIL) {
      i++
    }
  }

  for (let i = 0; i <= right.length; i++) {
    const ch = right[i]

    if (ch === TAIL) {
      rats++
      i++
    } else if (ch === RAT) {
      i++
    }
  }

  return rats
}

module.exports = countDeafRats
