const git = require('simple-git');
var chalk = require('chalk');
var fs = require('fs')
function rename() {
	if (process.argv[4] == "-o" || process.argv[4] == "--out") {
		if (process.argv[5] == undefined) {
			console.log(chalk.red.bold("Output dir not mad"))
		}
		else {
			const currPath = "./NPM-Template"
			const newPath = `./${process.argv[5]}`
			try {
				fs.rename(currPath, newPath, function(err) {
  				if (err) {
    				console.log(err)
  				} else {
    				console.log(chalk.green.bold(`Succesfully created console project! Please open it up and read the README.md and start editing!`));
  				}
				});
			}
			catch {
				console.log(chalk.red.bold("Directory name already exists"));
			}
		}
	}
	else {
		console.log(chalk.green.bold(`Succesfully created console project! Please open it up and read the README.md and start editing!`));
	}
}
function npmTemplate() {
	const remote = `https://github.com/NodenetTemplates/NPM-Template/`;
	git().silent(true)
  	.clone(remote)
  	.catch((err) => console.log(chalk.red.bold("Defualt template name still exists")));

	setTimeout(rename, 2000)
	
}

module.exports = {
	npmTemplate
}