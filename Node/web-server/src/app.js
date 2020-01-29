const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { forecast } = require('./utils/forecast');
const { geocode } = require('./utils/geocode');

const app = express();
const port = 3000;
const author = 'Diego Kazuo';

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

// Setup static directore to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: author
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: author
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: author,
    helpText: 'This is some helpful text.'
  });
});

app.get('/weather', (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: 'User didn\'t provide an address'
    });
  }

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, weatherReport) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        location,
        summary: weatherReport.summary,
        report: `It is currently ${weatherReport.currentlyData.temperature} degrees out. There is a ${weatherReport.currentlyData.precipProbability}% chance of rain.`
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.render('notFound', {
    title: '404',
    text: 'Help article not found',
    name: author
  });
});

app.get('*', (req, res) => {
  res.render('notFound', {
    title: '404',
    errorText: 'Page not found',
    name: author
  });
});

app.listen(port);