const express = require('express');
const app = express();
const https = require('https');

https.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e69c11bd5d2dd995208c7bf9319304b3', (response) => {
  console.log(response.statusCode);

  response.on('data', (data) => {
    const weatherData = JSON.parse(data);
    console.log(weatherData.weather[0].description);
  });
});

app.get('/', (req, res) => {
    res.send("Server is up and running  :)");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
