const http = require('http');
const uc = require('upper-case');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'Text/html'})
  res.write(uc.upperCase("hello world"));
  res.end()
}).listen(3333)