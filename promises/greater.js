function compareFn(num){
    return new Promise((resolve,reject)=>{
        if(num>10){
            resolve(num+" Success")
        }
        else{
            reject(num+" Failure")
        }
    })
}

var promise1 = compareFn(8);
promise1.then(function(value){
    console.log(value);
}).catch(function(err){
    console.error(err);
})
