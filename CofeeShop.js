function PlaceOrder(drink){
    return new Promise(function(resolve,reject){
        if (drink=='cofee'){
            resolve('Order For Cofee is received')

        }else{
            reject('Other Order rejects')
        }
    })
}

function ProcessOrder(order){
    return new Promise(function(resolve){
        console.log('order is being Processed')
        resolve(`${order} is served`)

    })
}
// PlaceOrder('Tea').then(function(OrderPlaced){
//     console.log(OrderPlaced)
//     let orderIsProcessed = ProcessOrder(OrderPlaced)
//     return orderIsProcessed
// }).then(function(ProcessOrder){
//     console.log(ProcessOrder)

// }).catch(function(error){
//     console.log(error)
// })


// Async -await

async function ServeOrder(){
    try {
        let orderPlaced = await PlaceOrder('cofee')
        console.log(orderPlaced)
        let ProcessedOrder = ProcessOrder(orderPlaced)
        console.log(ProcessedOrder)
    } catch (error) {
        console.log(error)
        
    }
}
ServeOrder()



    




