const os = require('os')

//offers info about the current user 
const user = os.userInfo()
console.log(user);
//returns info about the users uptime
console.log(`this is your uptime ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs);