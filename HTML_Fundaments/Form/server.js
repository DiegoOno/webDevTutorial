const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('<h1>Congratulations, new user created!!<h1/>')
})

app.post('/users/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send(`<h1>Congratulations, user ${req.body.name} was changed!!<h1/>`)
})


app.listen(3003);