function getValue(str, index, length) {
  if (index + length > str.length) return false;

  let value = 0;
  for (let i = 0; i < length; i++) {
    let code = str[index + i].charCodeAt(0) - "0".charCodeAt(0);
    if (code < 0 || code > 9) return false;
    value = value * 10 + code;
  }
  return value;
}

function findMissingNumber(str) {
  for (let i = 1; i < str.length; i++) {
    let num = getValue(str, 0, i);
    if (num == -1) return false;

    let missingNumber = -1;

    let isFailed = false;

    for (let j = i; j != str.length; j += 1 + Math.floor(Math.log10(num))) {
      if (
        missingNumber == -1 &&
        getValue(str, j, Math.floor(1 + Math.log10(num + 2))) == num + 2
      ) {
        missingNumber = num + 1;
        num += 2;
      } else if (
        getValue(str, j, Math.floor(1 + Math.log10(num + 1))) ==
        num + 1
      ) {
        num++;
      } else {
        isFailed = true;
        break;
      }
    }

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
