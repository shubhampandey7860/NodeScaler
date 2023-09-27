const myfunv = function(req,res,next){
    console.log('I am custom middelware')
    next()
}


module.exports = myfunv;