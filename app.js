//npm--global command,comes with node
//npm --version

//local dependency use it in only this particular project
//npm i <name of the package>

//global dependency- you  wish to utilize it all over your code  
//npm  install g-<package name>
// sudo install <package name>(mac os)

//package.json- this servs as the manifest file(stores important people)
//manual approach-creating the package json file in the root an dsetting it up manually 
//npm init - sets everything up step by step
//npm init -y (sets everything up by default)

const _ = require('lodash');

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)

console.log(newItems);
