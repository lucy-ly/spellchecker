/* global data */
const fs = require('fs');

fs.readFile('words.txt', 'utf8', function (err, data) {
  if (err) throw err;
  var content = data.split('/n');
  console.log(data);
});




// const fruits= ["apple", "banana", "orange"];

module.exports = data; // in order for node to use this file, you need to do this line #3 code