const fs=require('fs')

const first=fs.readFileSync('./content/first.txt','utf8')
const second=fs.readFileSync('./content/second.txt','utf8')

console.log(first,second)
//this creates a file if its non-existent but if it already exists the code overrides it
fs.writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`,{flag:'a'})
//you use the flag oobject to apppend what youve written in the code
