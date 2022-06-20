const palindrome = require("./palindrome");

describe("test palindrome", () => {
  test("test range 1-10", () => {
    expect(palindrome("1 10")).toBe(9);
  });

  test("test range 99-100", () => {
    expect(palindrome("99 100")).toBe(1);
  });

  test("test range 21-31", () => {
    expect(palindrome("21 31")).toBe(1);
  });
});
