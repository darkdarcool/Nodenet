var templates = require('../clones/npm.js')
var chalk = require('chalk');
const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}
function newTemplate() {
	if (process.argv[3] == undefined) {
		console.log("List of node templates");
	}
	else if (process.argv[3] == "npm") {
		try {
			templates.npmTemplate();
			clearLastLine();
			clearLastLine();
			clearLastLine();
		}
		catch {
			console.log(chalk.red.bold("An eeeeerror occured when cloning template."));	
		}
	}
	else {
		console.log(chalk.red.bold("Unknown template name"));
	}
}
module.exports = newTemplate