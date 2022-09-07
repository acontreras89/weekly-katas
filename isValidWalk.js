const getWalkDuration = walk => walk.length

// NOTE a walk is considered circular when for each block we move in one
// direction, we move another one in the opposite direction (e.g. north/south)
// (i.e. after the walk, you will end up exactly at the starting point)
const isCircularWalk = walk => {
  const { n, e, s, w } = walk.reduce(
    (acc, step) => {
      acc[step]++
      return acc
    },
    { n: 0, e: 0, s: 0, w: 0 }
  )
  return n === s && e === w
}

function isValidWalk(walk) {
  if (getWalkDuration(walk) !== 10) return false
  return isCircularWalk(walk)
}

module.exports = isValidWalk
