// path module

const path  = require("path")

let ext = path.extname('E:\\MY Workspace\\NodeScaler\\01NodeModules\\file1.txt')
let basename = path.basename('E:\\MY Workspace\\NodeScaler\\01NodeModules\\file1.txt')

console.log(ext)
console.log(basename)
console.log(__filename) // path name
console.log(__dirname) // dir name