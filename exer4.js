const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number to get its cube root', num => {
     console.log("Cube Root of the given number is :"+Math.cbrt(num));
  readline.close();
});