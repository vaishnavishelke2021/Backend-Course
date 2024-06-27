const fs = require("fs");

// parameters : (filename to copyFile, new filename)
fs.copyFileSync("./text.txt", "./copy.txt");
