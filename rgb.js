const minmax = (min, max) => n => Math.min(max, Math.max(min, n))

const ensureByteRange = minmax(0, 255)

const toTwoDigitHex = n => n.toString(16).padStart(2, '0')

const rgb = (r, g, b) =>
  [r, g, b].map(ensureByteRange).map(toTwoDigitHex).join('').toUpperCase()

module.exports = rgb
