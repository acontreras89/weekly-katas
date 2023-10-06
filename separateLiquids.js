// utils
const flat = arr => arr.reduce((acc, arr) => acc.concat(arr), [])

// business
// IDEA change to `glass?.[0]?.length ?? 0` after we migrate to modern versions of node
const getGlassWidth = glass => (glass[0] && glass[0].length) || 0

// IDEA use native `.flat` array method after we migrate to modern versions of node
const getGlassLiquids = glass => flat(glass)

const LIQUID_DENSITY_CHART = {
  H: 136,
  W: 100,
  A: 87,
  O: 80,
}

const compareLiquidsByDensity = (a, b) =>
  LIQUID_DENSITY_CHART[a] - LIQUID_DENSITY_CHART[b]

const sortLiquidsByDensity = liquids => liquids.sort(compareLiquidsByDensity)

const fillGlass = (liquids, width) => {
  return liquids.reduce((acc, liquid, index) => {
    const row = Math.floor(index / width)
    if (!acc[row]) acc[row] = []
    acc[row].push(liquid)
    return acc
  }, [])
}

function separateLiquids(glass) {
  const liquids = getGlassLiquids(glass)
  const sortedLiquids = sortLiquidsByDensity(liquids)
  return fillGlass(sortedLiquids, getGlassWidth(glass))
}

module.exports = separateLiquids
