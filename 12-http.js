const http = require("http");

// req - user send in
// res - server send out
// npm  - node package manager
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("prayut");
  }
  res.end("no this page");
});

server.listen(5000);
