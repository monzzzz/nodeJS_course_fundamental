const os = require("os");

//info aboout current user
const user = os.userInfo(); // check the info of user
console.log(user);

// method returns the system uptime in seconds
console.log(`The system up time is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
