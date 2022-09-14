const countBits = n => n.toString(2).match(/1/g)?.length ?? 0

module.exports = countBits
