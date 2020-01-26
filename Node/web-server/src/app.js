const path = require('path');
const express = require('express');

const app = express();
const port = 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directore to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Diego'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Diego'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Diego'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Maringa',
    temperature: '28 ºC'
  });
});

app.listen(port);