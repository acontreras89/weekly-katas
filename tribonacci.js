const sum = arr => arr.reduce((a, b) => a + b)

const SIGNATURE_LENGTH = 3

const tribonacci = (signature, n) => {
  if (n === 0) return []

  if (n < SIGNATURE_LENGTH) {
    return signature.slice(0, n)
  }

  const result = signature.slice()

  while (result.length < n) {
    result.push(sum(result.slice(-SIGNATURE_LENGTH)))
  }

  return result
}

module.exports = tribonacci
