console.log('Starting app');

setTimeout(()=>{
    console.log('inside of callback');
},2000);

setTimeout(()=>{
    console.log('inside second callback');
},0)

console.log('Finishing app');