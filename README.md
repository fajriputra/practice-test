# Pre Test Interview

This repo contains some questions of Pre Test interview using `Javascript`.

##### 1. Palindrome of range number

##### 2. Sorting Book related height, category, etc

##### 3. Finding of missing number

##### 4. Create unit test of each function

##### 5, Create a Web Service from one of the functions 1-3 questions

## Installation :

- Clone of repo `https://github.com/fajriputra/practice-test`
- Extract to Folder
- npm or yarn install
- Move folder, running code with Quokka Extention on current file
- Run unit test `yarn test file.test.js`

## Documentation of code

- Palindrome

  - Add function

    ```javascript
    function palindrome(str) {}
    ```

  - Parameters
    - accept single parameter `str` with type string <br/> <br/>
  - What the function returns
    - result of the total palindrome <br/> <br/>
  - Final Code

    ```javascript
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
        const isPalindrome =
          String(start).split("").reverse().join("") == start;

        // if mathces, countPalindrome + 1
        if (isPalindrome) countPalindrome += 1;

        start++;
      }

      // return palindrome;
      return countPalindrome;
    }
    console.log(palindrome("1 10"), "9"); // 9
    console.log(palindrome("99 100"), "1"); // 1
    console.log(palindrome("21 31"), "1"); // 1
    ```

- Sorting Books

  - Add function

    ```javascript
    function palindrome(str) {}
    ```

  - Parameters
    - `str` accept the type string <br/> <br/>
  - What the function returns
    - result of the total palindrome <br/> <br/>
  - Final Code

    ```javascript
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
        const isPalindrome =
          String(start).split("").reverse().join("") == start;

        // if mathces, countPalindrome + 1
        if (isPalindrome) countPalindrome += 1;

        start++;
      }

      // return palindrome;
      return countPalindrome;
    }
    console.log(palindrome("1 10"), "9"); // 9
    console.log(palindrome("99 100"), "1"); // 1
    console.log(palindrome("21 31"), "1"); // 1
    ```

- Finding Missing Number of String

  - Add function

    ```javascript
    // to get value
    function getValue(str, index, length) {}

    // Returns value of missing number
    function palindrome(str) {}
    ```

  - Parameters
    - `getValue()` accept 3 parameters, like `str`, `index`, `length` with type string <br/> <br/>
    - `findingMissingNumber()` accept single parameter `str` with type string <br/> <br/>
  - What the function returns
    - return missing number and convert to string <br/> <br/>
  - Final Code

    ```javascript
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
    console.log(
      findMissingNumber("101102103104105106107108109111112113"),
      "110"
    );
    console.log(findMissingNumber("12346789"), "5");
    console.log(findMissingNumber("79101112"), "8");
    console.log(findMissingNumber("7891012"), "11");
    console.log(findMissingNumber("9799100101102"), "98");
    console.log(findMissingNumber("100001100002100003100004100006"), "100005");
    ```
