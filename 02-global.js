// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
// use the arrow up the use the previous command in the terminal

// when we use vanillaJS, we will be able to access window extension

console.log(__dirname);
// log the hello world text every second (1000 millisecond)
setInterval(() => {
  console.log("hello world");
}, 1000);
