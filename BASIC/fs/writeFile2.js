const fs = require('fs');


fs.writeFile('myNewText3.txt', 'Gelo seco', (err) => {
  if (err) throw err
  console.log('Saved')
})