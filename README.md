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
