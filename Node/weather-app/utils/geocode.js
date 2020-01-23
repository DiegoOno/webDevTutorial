const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZGllZ29vbm8iLCJhIjoiY2s1b2pybXliMG4xejNlcGNxYTd6aTlxdSJ9.rbySwtMxtJVMxXlOOIygmQ&limit=1`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location service!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, response.body.features[0].center);
    }
  });
};

module.exports = { geocode };