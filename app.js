const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./forcasts/weather');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a,(errorMessage, results)=>{

    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude,(errorMessage, WeatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(JSON.stringify(WeatherResults,undefined,2));
            }
    
    });
    }

});


    