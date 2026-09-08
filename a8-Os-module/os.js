
//| # OS : operating system related information or data 

const os = require("os");

// defined the architecture of our machine
const cpu = os.arch(); // x64
console.log(cpu);

// return the amount of free memory in system
const freeMemory = os.freemem(); // memory return in the form of Bytes
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // then here convert into the GB.

// return the total memory of the machine
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

// return hostName (machine name)
const hostName = os.hostname();
console.log(hostName);

// return the platform of the os
const platform = os.platform();
console.log("platform", platform);

// return the operating system name
const operatingSystem = os.type();
console.log(operatingSystem);
