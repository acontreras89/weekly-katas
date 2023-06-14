const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const generateHashtag = phrase => {
  const words = phrase.split(/\s+/)
  const capitalizedWords = words.map(capitalize)
  const hashtag = capitalizedWords.join('')

  // NOTE we use 139 because we still need to prepend the '#'
  if (hashtag.length > 139 || hashtag === '') return false

  return `#${hashtag}`
}

module.exports = generateHashtag
