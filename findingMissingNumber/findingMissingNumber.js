// Gets the integer at position index
// with length, returns it or -1,
// if none
function getValue(str, index, length) {
  if (index + length > str.length) return false;

  // Find value at index and length.
  let value = 0;
  for (let i = 0; i < length; i++) {
    let code = str[index + i].charCodeAt(0) - "0".charCodeAt(0);
    if (code < 0 || code > 9) return false;
    value = value * 10 + code;
  }
  return value;
}

// Returns value of missing number
function findMissingNumber(str) {
  // Try all lengths for first number
  for (let i = 1; i < str.length; i++) {
    // Get value of first number with
    // current length
    let num = getValue(str, 0, i);
    if (num == -1) return false;

    // To store missing number of
    // current length
    let missingNumber = -1;

    // To indicate whether the sequence
    // failed anywhere for current length.
    let isFailed = false;

    // Find subsequent numbers with
    // previous number as n
    for (let j = i; j != str.length; j += 1 + Math.floor(Math.log10(num))) {
      // If we haven't yet found the missing number
      // for current length. Next number is n+2. Note
      // that we use Log10 as (n+2) may have more
      // length than n.
      if (
        missingNumber == -1 &&
        getValue(str, j, Math.floor(1 + Math.log10(num + 2))) == num + 2
      ) {
        missingNumber = num + 1;
        num += 2;
      }
      // If next value is (n+1)
      else if (
        getValue(str, j, Math.floor(1 + Math.log10(num + 1))) ==
        num + 1
      ) {
        num++;
      } else {
        isFailed = true;
        break;
      }
    }

    // return missing number and convert to string
    if (!isFailed) return String(missingNumber);
  }

  return missingNumber - 1;
}
console.log(findMissingNumber("23242526272830"), "29");
console.log(findMissingNumber("101102103104105106107108109111112113"), "110");
console.log(findMissingNumber("12346789"), "5");
console.log(findMissingNumber("79101112"), "8");
console.log(findMissingNumber("7891012"), "11");
console.log(findMissingNumber("9799100101102"), "98");
console.log(findMissingNumber("100001100002100003100004100006"), "100005");

module.exports = findMissingNumber;
