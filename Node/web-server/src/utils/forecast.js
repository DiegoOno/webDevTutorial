const request = require('request');
const { geocode } = require('./geocode');

const forecast = (latitude, longitude, callback) => {
  const forecastUrl = `https://api.darksky.net/forecast/17e40ff5081213f618a316654351e59b/${latitude},${longitude}?units=si`;

  request({ url: forecastUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const weatherReport = {
        summary: body.daily.data[0].summary,
        currentlyData: body.currently
      };
      callback(undefined, weatherReport);
    }
  });
};

module.exports = { forecast };