const appendFile.toCelsius = (fahrenheit) => { 
  return (fahrenheit-32) * 5/9; 
}

const fs = require('fs');
const utility = require('toCelsius');

fs.appendFile('log.txt', _________________(process.argv[2]) + "\n",
 (err) => { if (err) throw err; });