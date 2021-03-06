const fs = require('fs');


fs.writeFile('myNewText3.txt', 'this is my text', (err) => {
  if (err) throw err
  console.log('Saved')
})