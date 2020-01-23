const { forecast } = require('./utils/forecast');

const location = process.argv[2];

if (location) {
  forecast(location, (error, weatherReport) => {
    if (error) {
      console.log(error);
    } else {
      console.log(location);
      console.log(weatherReport.summary);
      console.log(`It is currently ${weatherReport.currentlyData.temperature} degrees out. There is a ${weatherReport.currentlyData.precipProbability}% chance of rain.`)
    }
  });
} else {
  console.log('Insert a location!!');
}