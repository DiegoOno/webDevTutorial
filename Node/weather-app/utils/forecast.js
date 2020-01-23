const request = require('request');
const { geocode } = require('./geocode');

const forecast = (location, callback) => {
  geocode(location, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const [longitude, latitude] = data;
      const forecastUrl = `https://api.darksky.net/forecast/17e40ff5081213f618a316654351e59b/${latitude},${longitude}?units=si`;

      request({ url: forecastUrl, json: true }, (error, response) => {
        if (error) {
          callback('Unable to connect to weather service', undefined);
        } else if (response.body.error) {
          callback('Unable to find location', undefined);
        } else {
          const weatherReport = {
            summary: response.body.daily.data[0].summary,
            currentlyData: response.body.currently
          };
          callback(undefined, weatherReport);
        }
      });
    }
  });
};

module.exports = { forecast };