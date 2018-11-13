const request = require('request');

var geocodeAddress = (argAddress, callback)=> {

    var enCodeURI = encodeURIComponent(argAddress);

    request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${enCodeURI}&key=AIzaSyBaDkRBBDJiUOu06IdREhjL5WId3pPPlBA`,
    json: true}   
    ,(error,response,body)=>{

        if(error){

            callback('Could not connect to servers');
            // console.log();
        }else if(response.status === 'INVALID_REQUEST'){

            callback('Unable to find address');
            // console.log()
        }else if(body.status === 'OK'){
            callback(undefined,
                {

                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            
            });
            
        }
        
    });


}

module.exports = {  geocodeAddress };