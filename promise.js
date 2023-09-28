let myPromise = new Promise(function(resolve,reject){
    const a = 4;
    const b = 4;
    setTimeout(()=>{
        if (a==b){
            resolve('The values are equal')
        }else{
            reject('The values are not equal')
        }
    },2000)
})


// pending state
// console.log(myPromise)


// fullfill

// consuming
myPromise.then(function(result){
    console.log(result)

})

// Rejected
myPromise.catch(function(error){
    console.log(error)
})

