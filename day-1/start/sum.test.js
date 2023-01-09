const sum = require('./sum');

test("sum two numbers", () => {
    expect(sum(2, 1)).toBe(3)
})