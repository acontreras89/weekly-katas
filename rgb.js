const fn = require('./fn')

const ensureByteRange = fn.clamp(0, 255)

const toHex = fn.pipe(
  ensureByteRange,
  fn.toHex,
  fn.padStart(2, '0'),
  fn.toUpperCase
)

const rgb = (r, g, b) => fn.pipe(fn.map(toHex), fn.join(''))([r, g, b])

module.exports = rgb
