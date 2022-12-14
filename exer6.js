const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter temperature in Celcius', num => {
       console.log("Temperature in Farenheit is :"+((num*9/5)+32));
    readline.close();
  });