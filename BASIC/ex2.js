const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'})
  let q = url.parse(req.url, true).query
  let text = q.year + " " + q.mounth
  res.end(text)
}).listen(3333)