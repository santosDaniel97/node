const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      let oldpath = files.filetoupload.path;
      let newpath = __dirname + files.filetoupload.name
      fs.rename(oldpath, newpath, (err) => {
        if(err) throw err;

        res.write('File Upload')
        res.end();
      })
    });
  } else {

    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end();
  }
}).listen(3333)


