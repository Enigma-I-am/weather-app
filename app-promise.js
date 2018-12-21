const yargs = require('yargs');
const axios = require('axios');



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

    var enCodeURI = encodeURIComponent(argv.a);
    var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${enCodeURI}&key=AIzaSyBaDkRBBDJiUOu06IdREhjL5WId3pPPlBA`;

    axios.get(geocodeURL).then((response)=>{

        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address');
        }


        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://api.darksky.net/forecast/a08e6633e115be1a102e3f0a0bd5e17b/${lat},${lng}`;


        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    })
    .then((response)=>{
        var temperature = response.data.currently.temperature;
        var actualTemperature = response.data.currently.apparentTemperature;
        console.log(`The temperature is ${temperature} and the apparent Temperature ${actualTemperature}`);
    })
    .catch((error)=>{
        if(error.code === 'ENOTFOUND'){
            console.log('Could not connect to servers');
        }else{
            console.log(error.message);
        }
        // console.log(error);
    });




    