function palindrome(str) {
  let [start, end] = str.split(" ");

  let countLoop = end - start;

  let countPalindrome = 0;
  for (let i = 0; i < countLoop; i++) {
    const isPalindrome = String(start).split("").reverse().join("") == start;
    // console.log(isPalindrome);
    if (isPalindrome) countPalindrome += 1;
    start++;
  }
  return countPalindrome;
}

// console.log(palindrome("1 10"), "9");
// console.log(palindrome("99 10"), "1");
// console.log(palindrome("21 31"), "1");

module.exports = palindrome;
