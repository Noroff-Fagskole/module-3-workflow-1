const subtract = require("./subtract")

// 2 - 1 = 1

test("subtract two numbers", () => {
    expect(subtract(2, 1)).toBe(1)
})