var asyncAdd = (a,b)=>{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{

        if(typeof a === 'number' && typeof b === 'number' ){
            resolve(a+b);
        }else{
            reject('Argument must be numbers');
        }
        
       },1500);
   });
}


asyncAdd(5,'7').then((result)=>{
    console.log(`Result: ${result}`);
    return asyncAdd(result,33);
}).then((res)=>{
    console.log(`The second result: ${res}`)
}).catch((errorMessage)=>{
    console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         // resolve('Hey it worked!');
//         reject('Unable to fulfill promise')
//     },2500)
    
// });

// somePromise.then((message)=>{

//     console.log(`Success: ${message}`);

// },(error)=>{
//     console.log(`error: ${error}`)
// });