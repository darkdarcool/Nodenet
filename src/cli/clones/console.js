const fs = require("fs")
var chalk = require('chalk');
function retrive() {
	console.log(chalk.blue.bold('Extracting file cores...'))
}
function decoding() {
	console.log(chalk.blue.bold('Decoding files...'))
}
function writing() {
	console.log(chalk.blue.bold("Writing files..."))
}
function done() {
	console.log(chalk.green.bold(`Succesfully created console project! Please open '${file}' and read the README.md and start editing!`))
}
function makeSrc() {
	fs.mkdir(`./${file}/src/`, function(err) {
		if (err) {
			console.log(err);
		}
	});
}
function makeIndex() {
	fs.appendFile(`./${file}/src/index.js`,"console.log('Hello, world!');", function (err) {
		if (err) {
			console.log(err);
		}
	});
}
function makeMd() {
	fs.appendFile(`./${file}/README.md`, readme, function(err) {
		if (err) {
			console.log(err);
		}
	});
}
// 4
var file;
var readme = `# Console-Template
Console template for Nodenet

You can run \`node src/index.js\` to run your program, and then edit out index.js to your hearts content!
`
function consoleTemplate() {
	if (process.argv[4] == "-o" || process.argv[4] == "--out") {
		if (process.argv[5] == undefined) {
			console.log(chalk.red.bold("Output file not specified"));
			process.exit(0)
		}
		else {
			file = process.argv[5];
		}
	}
	else {
		file = "console"
	}
	fs.mkdir(`${file}`, function(err) {
  	if (err) {
			console.log(chalk.red.bold(`'${file}' already exists.`));
			process.exit(0)
  	} 
	});
	setTimeout(retrive, 5000)
	setTimeout(makeSrc, 5000)
	setTimeout(decoding, 6000)
	setTimeout(makeIndex, 6000)
	setTimeout(writing, 7000)
	setTimeout(makeMd, 7000);
	setTimeout(done, 7500)
}

module.exports = {
	consoleTemplate
}
