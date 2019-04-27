// console.log("Server running");
const express = require('express'); // tells JS file you are using express
const data = require('./data'); // type in the path ./data
const app = express(); // function call creates an app using express
const port = process.env.PORT || 5000; // sets a constant called port that contains the number 5000 || is an or notation
// added a comment, hit save and it restarts (nodemon)

console.log(data);

app.get('/', function (req, res){
    const userName = req.query.user;
    res.send('Hello ' + userName + '!')
});

// app.get('/', (req, res) => res.send('Hello World!')) // matching a method of your API call, 2nd parameter is an arrow function callback (request/response)

app.listen(port, () => console.log(`App listening on port ${port}!`)) // port = usb, hdmi, like a room # (3000) each parameter is separated by a comma
// callback function is something that is called after something is complete
// backtick notation inserting a variable inside a string

// pass in a parameter or query www.wiki.com/api/?user=lucy   