const KEY_COUNT = 88
const BLACK_KEY_INDEXES = [
  2, 5, 7, 10, 12, 14, 17, 19, 22, 24, 26, 29, 31, 34, 36, 38, 41, 43, 46, 48,
  50, 53, 55, 58, 60, 62, 65, 67, 70, 72, 74, 77, 79, 82, 84, 86,
]

function blackOrWhiteKey(keyPressCount) {
  const keyIndex = keyPressCount % KEY_COUNT
  return BLACK_KEY_INDEXES.includes(keyIndex) ? 'black' : 'white'
}

module.exports = blackOrWhiteKey
