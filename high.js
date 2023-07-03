const fn = require('./fn')

const charCode = char => char.charCodeAt(0)

const CHAR_CODE_TO_SCORE_DISTANCE = charCode('a') - 1

const getLetterScore = letter => charCode(letter) - CHAR_CODE_TO_SCORE_DISTANCE

const getWordScore = fn.pipe(fn.toCharArray, fn.map(getLetterScore), fn.sum)

const toScoredWord = word => ({ word, score: getWordScore(word) })

const getMaxScoredWord = fn.reduce((currentWord, nextWord) =>
  currentWord === undefined || nextWord.score > currentWord.score
    ? nextWord
    : currentWord
)

const pickWord = scoredWord => scoredWord.word

const highestScoringWord = fn.pipe(
  fn.getWords,
  fn.map(toScoredWord),
  getMaxScoredWord,
  pickWord
)

module.exports = highestScoringWord
