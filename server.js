const express = require("express");
const app = express();
const data = require("./data.js");
const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get('/data', (req, res) => {
    const word = req.query.word;
    if(data.hasOwnProperty(word)) {
    res.send(`The word ${word} is in the Dictionary!`);
}else{
    res.send(`Word ${word} does not exist!`);
}

});


// console.log('server running now');

app.listen(port, () => console.log(`Server listening on ${port}`));