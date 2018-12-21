

const request = require('request');

var getWeather = (lat, lng, callback)=>{

    request({url: `https://api.darksky.net/forecast/a08e6633e115be1a102e3f0a0bd5e17b/${lat},${lng}`, json: true},
    (error,response,body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                 apperentTemprature: body.currently.apparentTemperature
            })
        }else{
            callback('Unable to fetch data')
        }
        
    });

}

module.exports = {getWeather};

