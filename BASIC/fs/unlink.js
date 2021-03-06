const fs = require('fs');


fs.unlink('myNewText.txt', (err) => {
  if (err) throw err
  console.log('Saved')
})