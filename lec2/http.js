const http= require('http');
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
const server = http.createServer((req,res)=>{
    res.end('ok'); // res.write("ok") before this line , can aslo be used and the 'ok' is the response- meanns open localhost:3004 - you will see this message
    res.writeHead(200,{"Content-type": "text/plain"})
    
    //Add an HTTP Header - content-type is html here
    res.writeHead(200,{"Content-type": "text/html"})
    res.end('<h1>Hello world</h1>');
})
// now listen(port,callback)
server.listen(3004,()=> console.log("Server started: Listining on port 3004"))

//  req argument that represents the request from the client
//This object has a property called "url" which holds the part of the url that comes after the domain name:
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(3004);