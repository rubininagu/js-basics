const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number in inches', num => {
      console.log(num + " inches is "+num/12+" feet");
    readline.close();
  });