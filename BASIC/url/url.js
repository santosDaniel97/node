const url = require('url')

// dividindo a url em partes visiveis

const adr = 'http://localhost:3333/default.htm?year=2017&month=february';

const q = url.parse(adr, true);

console.log(q.host)
console.log(q.pathname)

console.log(q.search)

let qdata = q.query; // returns an object {year: 2017, month: 'february'}
console.log(qdata.month)

