const fs = require('fs');


fs.open('myNewText2.txt', 'w', (err) => {
  if (err) throw err
  console.log('Saved')
})