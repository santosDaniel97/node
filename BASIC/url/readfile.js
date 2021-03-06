const http = require('http');
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {

  const q = url.parse(req.url, true);
  const filename =  './url' + q.pathname;
  fs.readFile(filename, (err, data) => {
    console.log(filename)
    if (err) {

      res.writeHead(404, { 'Content-type': 'text/html' })
      return res.end('data')
    }



    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(data)
    return res.end()

  })
}).listen(3333);