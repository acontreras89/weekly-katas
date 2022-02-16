const SECONDS_PER_HOUR = 60 * 60 // 3600
const SECONDS_PER_MINUTE = 60

// TODO 🤖 make functional!
function humanReadable(seconds) {
  // 💥
  // let hours, minutes
  // for (hours = 0; seconds >= SECONDS_PER_HOUR; hours++, seconds -= SECONDS_PER_HOUR);
  // for (minutes = 0; seconds >= SECONDS_PER_MINUTE; minutes++, seconds -= SECONDS_PER_MINUTE);

  const hours = Math.trunc(seconds / SECONDS_PER_HOUR)
  seconds %= SECONDS_PER_HOUR

  const minutes = Math.trunc(seconds / SECONDS_PER_MINUTE)
  seconds %= SECONDS_PER_MINUTE

  return [hours, minutes, seconds]
    .map(n => String.prototype.padStart.call(n, 2, '0'))
    .join(':')
}

module.exports = humanReadable
