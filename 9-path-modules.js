const path= require('path')

//shows your platforms' specific sep
console.log(path.sep);

const filepath= path.join('/content','subfolder','text.txt')

console.log(filepath);
//to access just the base of the filepath. you go with basename
const base=path.basename(filepath)
console.log(base);

const absolute= path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);