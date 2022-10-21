const fn = require('./fn')

// business
const GOOD_WINS = 'Battle Result: Good triumphs over Evil'
const EVIL_WINS = 'Battle Result: Evil eradicates all trace of Good'
const DRAW = 'Battle Result: No victor on this battle field'

// hobbits, men, elves, dwarves, eagles and wizards
const GOOD_WORTHS = [1, 2, 3, 3, 4, 10]
// orcs, men, wargs, goblins, uruk hai, trolls and wizards
const EVIL_WORTHS = [1, 2, 2, 2, 3, 5, 10]

const getForces = fn.pipe(fn.split(' '), fn.map(Number))

const getForcesTotalWorth = worths =>
  fn.pipe(
    fn.map((count, index) => count * worths[index]),
    fn.sum
  )

const getGoodForcesTotalWorth = getForcesTotalWorth(GOOD_WORTHS)

const getEvilForcesTotalWorth = getForcesTotalWorth(EVIL_WORTHS)

const getBattleResult = (goodForcesWorth, evilForcesWorth) =>
  goodForcesWorth === evilForcesWorth
    ? DRAW
    : goodForcesWorth > evilForcesWorth
    ? GOOD_WINS
    : EVIL_WINS

function goodVsEvil(goodForcesString, evilForcesString) {
  const goodForces = getForces(goodForcesString)
  const evilForces = getForces(evilForcesString)

  const goodForcesWorth = getGoodForcesTotalWorth(goodForces)
  const evilForcesWorth = getEvilForcesTotalWorth(evilForces)

  return getBattleResult(goodForcesWorth, evilForcesWorth)
}

module.exports = goodVsEvil
