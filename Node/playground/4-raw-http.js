const https = require('https');
const forecastUrl = `https://api.darksky.net/forecast/17e40ff5081213f618a316654351e59b/40,-75?units=si`;

const request = https.request(forecastUrl, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
})

request.end();