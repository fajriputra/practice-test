const findMissingNumber = require("./findingMissingNumber");

describe("test find number missing", () => {
  test("test find number missing", () => {
    expect(findMissingNumber("23242526272830")).toBe("29");
  });
  test("test find number missing", () => {
    expect(findMissingNumber("101102103104105106107108109111112113")).toBe(
      "110"
    );
  });
  test("test find number missing", () => {
    expect(findMissingNumber("12346789")).toBe("5");
  });
  test("test find number missing", () => {
    expect(findMissingNumber("79101112")).toBe("8");
  });
  test("test find number missing", () => {
    expect(findMissingNumber("7891012")).toBe("11");
  });
  test("test find number missing", () => {
    expect(findMissingNumber("9799100101102")).toBe("98");
  });
  test("test find number missing", () => {
    expect(findMissingNumber("100001100002100003100004100006")).toBe("100005");
  });
});
