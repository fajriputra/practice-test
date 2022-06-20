const express = require("express");
const app = express();
const palindrome = require("./palindrome/palindrome");
const port = 3000;

app.use(express.json());
app.get("/palindrome", function (req, res) {
  //   console.log(req.body);
  const { param } = req.body;
  const result = palindrome(param);
  if (param.indexOf(" ") == -1) {
    return res.status(400).json({
      status: "error",
      message: "not palindrome",
    });
  }
  return res.status(200).json({
    status: "success",
    data: `${result} total of palindrome`,
  });
});
app.listen(port, function () {
  console.log(`Listening to Port ${port}`);
});
