const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log("header", request.headers);
  console.log("method", request.method);
  console.log("url", request.url);
  //   response.setHeader("Content-Type", "text/html");

  const user = {
    name: "jerry",
    hobby: "being jerry",
  };
  response.setHeader("Content-Type", "application/json");
  //   response.end("<h1>Hello there, I am with you</h1>");
  response.end(JSON.stringify(user));

  console.log("I hear you. Thanks for the request");
});

server.listen(3000);
