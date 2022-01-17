var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const products = JSON.stringify([
      {
        name: "농구공",
        price: 5000,
      },
    ]);
    res.end(products);
  } else if (method === "POST") {
    res.end("쌩썽뙤었씁니따.");
  }
});

server.listen(port, hostname);

console.log("Let's Go Server!!!");
