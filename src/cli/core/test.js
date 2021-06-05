const { exec } = require('child_process');
var chalk = require('chalk');
const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}
function test() {
	console.log("Starting tests...");
	if (process.argv[3] == "--chitchat" || process.argv[3] == "-chit") {
		console.log(process.argv[3])
		if (process.argv[4] == undefined) {
			console.log(chalk.red.bold("File cannot be null"));
			process.exit(0);
		}
		exec(`npx chitchatsjs build ${process.argv[4]}`, (err, stdout, stderr) => {
			if (err) {
				console.log(chalk.red.bold("An error occured."));
			}
			console.log(`${stdout}`)
			clearLastLine();
		});
	}
	else if (process.argv[3] == undefined) {
		console.log(chalk.red.bold("File must be specified."));
		process.exit(0);
	}
	else {
		exec(`jest $PWD/${process.argv[3]}`, (err, stdout, stderr) => {
  		if (err) {
				e = process.argv[3]
    		if (e.indexOf('.test.') == -1) {
					console.log(chalk.red.bold("File not a jest test file"))
				}
				else {
					console.log(chalk.red.bold("An error occured."));
					console.log(`${stderr}`)
				}
  		} else {
   			// console.log(`${stdout}`);
   			console.log(`${stderr}`);
				clearLastLine();
				clearLastLine();
  		}
		});
	}
}
module.exports = test