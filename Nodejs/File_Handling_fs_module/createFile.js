const fs = require("fs");

// creating file : A synchronous call
// parameters : (path of file, text in file)
fs.writeFileSync("./test.txt", "Test file created for sync call");

// creating file : A asynchronous call
// parameters : (path of file, text in file, a callback fun for err)
fs.writeFile("./test2.txt", "Test2 file created for async call", (err) => {
  console.log(err);
});
