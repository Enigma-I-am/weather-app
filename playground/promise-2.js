const request = require('request');

var geocodeAddress = (address)=>{

        return new Promise((resolve,reject)=>{

        var enCodeURI = encodeURIComponent(address);
        request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${enCodeURI}&key=AIzaSyBaDkRBBDJiUOu06IdREhjL5WId3pPPlBA`,
    json: true}   
    ,(error,response,body)=>{

        if(error){

            reject('Could not connect to servers');
            // console.log();
        }else if(response.status === 'INVALID_REQUEST'){

            reject('Unable to find address');
            // console.log()
        }else if(body.status === 'OK'){
            resolve(
                {

                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            
            });
            
        }
        
    });
        


    });

};

geocodeAddress('Enugu').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
})