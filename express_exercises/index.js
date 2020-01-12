const express = require('express');
const app = express();
const greeting = require('./greetingsMiddleware')
const bodyParser = require('body-parser');
const userApi = require('./api/user');

const port = 3000;

app.post('/user', userApi.save);
app.get('/user', userApi.getUser);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(greeting('Diego'));

app.get('/clients/report/', (req, res) => {
    res.send(`Client report: Full = ${req.query.full} year = ${req.query.year}.`);
})

app.get('/clients/:id', (req, res) => {
    res.send(`Client ${req.params.id} selected!`);
})

app.post('/body', (req, res) => {
    res.send(req.body);
})

app.get('/product1', (req, res) => {
    res.json({
        name: 'Computer',
        price: 3200.00,
        discount: 0.12
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}...`);
});