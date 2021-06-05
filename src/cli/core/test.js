const { exec } = require('child_process');
var chalk = require('chalk');
const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}
function test() {
	console.log("Starting tests...");
	if (process.argv[3] == undefined) {
		console.log(chalk.red.bold("File must be specified."));
		process.exit(0);
	}
	exec(`jest ${process.argv[3]}`, (err, stdout, stderr) => {
  	if (err) {
    	console.error(err)
  	} else {
   		// console.log(`${stdout}`);
   		console.log(`${stderr}`);
			clearLastLine();
			clearLastLine();
  	}
	});
}
module.exports = test