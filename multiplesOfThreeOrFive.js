// REVIEW this was implemented in 5 minutes and it should be refactored

function solution(number) {
  const multiplesOfThreeOrFive = []
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiplesOfThreeOrFive.push(i)
  }
  return multiplesOfThreeOrFive.reduce((a, b) => a + b, 0)
}

module.exports = solution
