const fs = require('fs');


fs.appendFile('myNewText.txt', ' Gelo seco', (err) => {
  if (err) throw err
  console.log('Saved')
})