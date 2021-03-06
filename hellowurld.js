var http = require('http');
var url = require('url');
var addon = require('./build/Release/hello');

// Scrape a couple parameters out of the query string, pass them to C++, and print the return plus some other stuff to the DOM:
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  response.end(queryData.fxn + "({message:'"+addon.hello(queryData.payload)+", "+addon.helloAgain()+"'})");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
