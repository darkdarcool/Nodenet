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
	console.log(chalk.green.bold(`Succesfully created test directory! Please open 'tests' and start testing!`))
}
function makeTestDir() {
	fs.mkdir(`./tests/`, function(err) {
		if (err) {
			console.log(err);
		}
	});
}
function makeJest() {
  fs.appendFile(`./tests/main.test.js`, "var add = require('../add.js');\ntest('Returns add correctly', () => {\n  expect(add(4, 5)).toBe(9)});'")
}
function makeTestFile() {
	fs.appendFile(`./add.js`,"function add(num1, num2) {\n  return num1 + num2;\n}\n\nmodule.exports = add", function (err) {
		if (err) {
			console.log(err);
		}
	});
}
// 4

var readme = `# Console-Template
Console template for Nodenet

You can run \`node src/index.js\` to run your program, and then edit out index.js to your hearts content!
`
function testTemplate() {

	setTimeout(retrive, 5000)
	setTimeout(makeTestFile, 5000)
	setTimeout(decoding, 6000)
	setTimeout(makeTestDir, 6000)
	setTimeout(writing, 7000)
	setTimeout(makeTestFile, 7000);
	setTimeout(done, 7500)
}

module.exports = {
	testTemplate
}
