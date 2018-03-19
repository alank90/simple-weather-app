    const request = require('request');
    const argv = require('yargs').argv;

    const apiKey = '8d4e75892426850a05baa1102dfaf243';
    const city = argv.c || 'eastchester';
    const unitsFormat = 'imperial';
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsFormat}`;
   

    request(url, function(err, response, body) {
        if(err) {
            console.log('error: ', error);
        } else {
            const weather = JSON.parse(body);
            const message = `It's ${weather.main.temp} degrees in ${weather.name} and ${weather.weather[0].description}`;
            
            console.log(message);
        }
    });

