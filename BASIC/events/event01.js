const fs = require('fs')
const rs = fs.createReadStream('./events/demofile.txt')

rs.on('open', () => {
  console.log('The file is open')
})