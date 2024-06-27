const fs = require("fs");

// parameters : (filename to delete)
// fs.unlinkSync("./test2.txt");


// -----------------------------------------------------------
// get statistics of file
console.log(fs.statSync("./test.txt"));
