const strictEqual = require('chai').assert.strictEqual

const humanReadable = require('./humanReadable')

describe('humanReadable', function () {
  it('should format correctly', function () {
    strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)')
    strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)')
    strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)')
    strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)')
    strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)')
    strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)')
    strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)')
    strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)')
    strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)')
    strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)')
  })
})
