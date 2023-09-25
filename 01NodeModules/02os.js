const os = require('os')

console.log(os.arch()) // 64 or 32
console.log(os.platform())
console.log(os.cpus())
console.log(os.networkInterfaces())
console.log(os.totalmem())
console.log(os.freemem())