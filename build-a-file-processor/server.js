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

// lesson 14
/*
const crypto =require('crypto')

const Hash= crypto.createHash('sha256').update('freeCodeCamp!').digest('hex')
console.log(Hash)
*/

// lesson 15
/*const crypto =require('crypto')

const random =crypto.randomBytes(16).toString("hex")

console.log(random)
*/
// lesson 16
/*
const id = crypto.randomUUID();
console.log(id)*/
 // lesson 17
 /*
const os =require('os')

console.log(os.platform())
console.log(os.arch())
console.log(os.hostname())

*/
// lesson 18
/*
const os = require('os');

console.log(os.totalmem());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.uptime());

*/
// lesson 19
/*
const os= require('os')

console.log(os.cpus().length)
*/
// lesson 20
/*
const path = require('path')

const fullpath= path.join(__dirname,'assets','poem.txt')

console.log(fullpath)
*/

// lesson 21
/*
const path =require('path')

const fullpath = path.join(__dirname,'assets','poem.txt')

console.log(path.basename(fullpath))
console.log(path.dirname(fullpath))
console.log(path.extname(fullpath))
// lesson 22
console.log(path.join("assets", "..", "server.js"));
console.log(path.resolve("assets", "..", "server.js")); 

// lesson 23
const parts=path.parse(fullpath)
console.log(parts)
*/
// lesson 24

 const version = process.version

 console.log(version)
 const platform=process.platform
console.log(platform)

const env =process.env.NODE_ENV
console.log(env)

// lesson 25
console.log(process.argv); // [ '/path/to/node', '/path/to/server.js', 'hello', 'world' ]
console.log(process.argv[2]);

// lesson 26 


process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");
