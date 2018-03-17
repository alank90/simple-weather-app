    const request = require('request');
    const apiKey = '8d4e75892426850a05baa1102dfaf243';
    const city = 'portland';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    console.log(url);

    request(url, function(err, response, body) {
        if(err) {
            console.log('error: ', error);
        } else {
            console.log('body: ', body);
        }
    });

