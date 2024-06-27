const http = require("http");
const fs = require("fs");

//create log for every request using fs module
const myServer = http.createServer((req, res) => {
  const log = `Time: ${Date.now()} => new request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) throw err;
    res.end("Hello from server");
  });
});

myServer.listen(8000, () => {
  console.log("Server started");
});
