const { writeFileSync, readFileSync } = require("fs");
console.log("start");
// const fs = require ("fs")
// fs.readFileSync

// read the txt file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// if the file is already exist node will override (delete old thing and replace it)
// but if there is not, node will create a new file
// flag "a" node will not delete the old thing and add the new value
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
