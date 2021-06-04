const git = require('simple-git');
function npmTemplate() {
	const remote = `https://github.com/NodenetTemplates/NPM-Template/`;

	git().silent(true)
  	.clone(remote)
  	.then(() => console.log('finished'))
  	.catch((err) => console.error('failed: ', err));
}

module.exports = {
	npmTemplate
}