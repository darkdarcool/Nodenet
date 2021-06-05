var templates = require('../clones/npm.js')
var chalk = require('chalk');
var options = `

npm package : npm

`
const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}
function newTemplate() {
	if (process.argv[3] == undefined) {
		console.log(options);
	}
	else if (process.argv[3] == "npm") {
		try {
			templates.npmTemplate();
			clearLastLine();
			clearLastLine();
			clearLastLine();
		}
		catch {
			console.log(chalk.red.bold("An error occured when cloning template."));	
		}
	}
	else {
		console.log(chalk.red.bold("Unknown template name, please do") + "\n	" + chalk.white.bold("nodenet new") + "\n" + chalk.red.bold("To see a list"));
	}
}
module.exports = newTemplate