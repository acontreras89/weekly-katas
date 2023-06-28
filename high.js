const charCode = char => char.charCodeAt(0)

const CHAR_CODE_TO_SCORE_DISTANCE = charCode('a') - 1

const getLetterScore = letter => charCode(letter) - CHAR_CODE_TO_SCORE_DISTANCE

const getWordScore = word =>
  word.split('').reduce((score, letter) => score + getLetterScore(letter), 0)

const getWords = str => str.split(/\s+/)

const highestScoringWord = str => {
  const words = getWords(str)
  const scores = words.map(getWordScore)
  const max = Math.max(...scores)
  const index = scores.indexOf(max)
  return words[index]
}

module.exports = highestScoringWord
