const fs = require("fs");

// sync
// if we use sync then it will return the result in variable (here in result)
// parameters : (file name to read, encoding)
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);


// async
// it does not return anything, instead expects a callback fun for (err and result)
// parameters : (file name to read, encoding, callback fun (err, result))
fs.readFile("./test2.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
