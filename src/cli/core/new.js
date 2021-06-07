var npm = require('../clones/npm.js')
var consolet = require('../clones/console.js')
var chalk = require('chalk');
const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}
var options = `npm package : npm
console application : console
`

function newTemplate() {
	if (process.argv[3] == undefined) {
		console.log(options);
		clearLastLine();
	}
	else if (process.argv[3] == "npm") {
		try {
			npm.npmTemplate();
		}
		catch {
			console.log(chalk.red.bold("An error occured when cloning template."));	
		}
	}
	else if (process.argv[3] == "console") {
	 // try {
			consolet.consoleTemplate()
		//}
		//catch {
	//		console.log(chalk.red.bold("An error occured when cloning template."));	
	//	}
	}
	else {
		console.log(chalk.red.bold("Unknown template name, please do") + "\n	" + chalk.white.bold("nodenet new") + "\n" + chalk.red.bold("To see a list"));
	}
}
module.exports = newTemplate