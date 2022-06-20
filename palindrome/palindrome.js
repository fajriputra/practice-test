function palindrome(str) {
  // split the string into an array from start to end
  let [start, end] = str.split(" ");

  // result of subtraction params end to start
  let countLoop = end - start;

  // result of palindrome
  let countPalindrome = 0;

  // looping countLoop to get index of loop
  for (let i = 0; i < countLoop; i++) {
    // if numbers reverse is not matches with start, not palindrome
    const isPalindrome = String(start).split("").reverse().join("") == start;

    // if mathces, countPalindrome + 1
    if (isPalindrome) countPalindrome += 1;
    start++;
  }

  // return palindrome;
  return countPalindrome;
}

console.log(palindrome("1 10"), "9");
console.log(palindrome("99 100"), "1");
console.log(palindrome("21 31"), "1");

module.exports = palindrome;
