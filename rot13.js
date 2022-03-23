const UPPERCASE_A_CODE_POINT = 65 // getCharCode('A')
const LOWERCASE_A_CODE_POINT = 97 // getCharCode('a')
const CHARACTER_COUNT = 26 // getCharCode('A') - getCharCode('Z') + 1

const getCharCode = ch => ch.charCodeAt(0)

// PRE `code` is assumed to be an english-alphabet charecter code (i.e. the code
// for a character between a and z or between A and Z)
const isUppercaseCharCode = code => code < LOWERCASE_A_CODE_POINT

function rot13(message) {
  return message.replace(/[a-zA-Z]/g, ch => {
    const charCode = getCharCode(ch)
    const isUppercase = isUppercaseCharCode(charCode)

    const baseCharCode = isUppercase
      ? UPPERCASE_A_CODE_POINT
      : LOWERCASE_A_CODE_POINT
    const nextCharCode = (charCode - baseCharCode + 13) % CHARACTER_COUNT
    return String.fromCharCode(baseCharCode + nextCharCode)
  })
}

module.exports = rot13
