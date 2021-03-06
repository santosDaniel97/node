const fs = require('fs');


fs.rename('myNewText2.txt', 'newTextName.txt', (err) => {
  if (err) throw err
  console.log('Saved')
})