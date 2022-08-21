//Take input from user
const readLine = require('readline'); // import the inbuilt read line module
const rl = readLine.createInterface({ // method to define from where we are going to read the input
    input:process.stdin, // stdin: standard input - used for cmd promt, we can use filesystem if we want to take input from the file
    output:process.stdout
})
rl.question("What is your name ?", (answer)=>{
    console.log(`Hello ${answer}`);
    rl.close();
})