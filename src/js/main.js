    const requst = require('request');
    const apiKey = '5b3cfd04dab93de7a60dab022c0b2644';
    const city = 'portland';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'

    request(url, function(err, response, body) {
        if(err) {
            console.log('error: ', error);
        } else {
            console.log('body: ', body);
        }
    });

