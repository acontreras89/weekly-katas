function dblLinear(n) {
  const u = [1]
  const used = {}
  const pending = []

  let i = 0
  while (u.length < n + 1) {
    const x = u[i]
    const y = x * 2 + 1

    while (pending.length && y >= pending[0]) {
      u.push(pending.shift())
    }

    if (!used[y]) {
      u.push(y)
      used[y] = true
    }

    const z = x * 3 + 1
    if (!used[z]) {
      pending.push(z)
      used[z] = true
    }

    i++
  }

  return u[n]
}

module.exports = dblLinear
