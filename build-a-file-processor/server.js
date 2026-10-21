// Starter file — add your code here
const http = require('http')

const fs=require('fs')
//const data=fs.readFileSync('assets/poem.txt', { encoding: "utf8" })
//const data =fs.readFile('assets/poem.txt',{encoding:"utf8"},(err,data)=>{
  //  console.log(data)
//})


/// lesson 5
/*const fsPromises=require('fs/promises')

async function main(){
    const data = await fsPromises.readFile('assets/poem.txt',{encoding :"utf8"})

    console.log(data)
}

main()
*/
// lesson 6
//const data = fs.writeFileSync('assets/output.txt',"Hello, freeCodeCamp!")

// lesson 7
//const data = fs.appendFileSync('assets/output.txt',"\nSecond line")

// lesson 8
/*const  exists = fs.existsSync('assets/output.txt')

console.log(exists)*/
// lesson 9
/*
const entries = fs.readdirSync('assets')
console.log(entries)*/

// lesson 10
/*
const buf =Buffer.from("Hello, Node!")

console.log(buf)
*/

//lesson 11
/*const buf = Buffer.from("hello")

console.log(buf.toString("hex"))
console.log(buf.toString("base64"))
*/

// lesson 12
/*
const buf=Buffer.alloc(8,0xff)

console.log(buf)*/
// lesson 13
/*
const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded); 
*/

