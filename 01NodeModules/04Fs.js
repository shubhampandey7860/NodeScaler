// file system

const fs = require('fs')

// // reading a file
// const file = fs.readFileSync('file1.txt')
// console.log("Data written inside file1.tx ",file) 
// // It will give result in buffer format for converting to string we have to use concatinataion

// console.log("Data written inside file1.tx --> "+file)



// //writing a file
// fs.writeFileSync('file2.txt',"This is file2.txt")
// console.log("File has been written")

// // append a file

// fs.appendFileSync("file2.txt"," Jay Shri Ram")
// console.log("File has been updated")


// // deleting a file
// fs.unlinkSync("file2.txt")
// console.log("File has been deleted !")


// create directories

//fs.mkdirSync('my_directory')

// check the content of directory

const folderPath = "E:\\MY Workspace\\NodeScaler\\01NodeModules\\my_directory"
const folderContent = fs.readdirSync(folderPath)
console.log('content ==>',folderContent)

// check whether directory exist or not

const doesexist = fs.existsSync('my_directory')
console.log(doesexist)

// remove directory
fs.rmdirSync('my_directory')
console.log("directory deleted")
