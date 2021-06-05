const git = require('simple-git');
var chalk = require('chalk');
function npmTemplate() {
	const remote = `https://github.com/NodenetTemplates/NPM-Template/`;
	git().silent(true)
  	.clone(remote)
  	.then(() => console.log('Completed! Open ./NPM-Template and rename it and read the README.md!'))
  	.catch((err) => console.log(chalk.red.bold("Defualt template name still exists")));
}

module.exports = {
	npmTemplate
}