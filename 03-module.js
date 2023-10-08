// CommonJS, every file is module (by default)
// Modules - Encapsulated code (onlu share minimum)
const names = require("./4-name");
const sayHi = require("./5-second-module");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");
console.log(data.items[0]);
console.log(data.singlePerson.name);
sayHi(names.elmond);
sayHi("Prayut");
