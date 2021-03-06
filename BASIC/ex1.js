let http = require('http');
let date = require('./datatime');

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('A data de hoje é: ' + date.myDateTime())
  res.write(req.url)
  
  res.end('Hello')
}).listen(3333);