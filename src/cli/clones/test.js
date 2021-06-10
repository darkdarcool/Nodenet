const fs = require("fs")
var chalk = require('chalk');
var file;
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
	fs.mkdir(`./${file}/tests/`, function(err) {
		if (err) {
			console.log(err);
		}
	});
}
function makeJest() {
  fs.appendFile(`./${file}/tests/main.test.js`, "var add = require('../add.js');\ntest('Returns add correctly', () => {\n  expect(add(4, 5)).toBe(9);\n});", function (err) {
    if (err) {
      console.log(err);
    }
  })
}
function makeTestFile() {
	fs.appendFile(`./${file}/add.js`,"function add(num1, num2) {\n  return num1 + num2;\n}\n\nmodule.exports = add", function (err) {
		if (err) {
			console.log(err);
		}
	});
}
// 4

function testTemplate() {
  if (process.argv[4] == "-o" || process.argv[4] == "-out") {
    if (process.argv[5] == undefined) {
      console.log(chalk.red.bold("Outdir cannot be null"));
    }
    else {
      file = process.argv[5]
    }
  }
  else {
    file = "testDir"
  }
  fs.mkdir(`${file}`, function(err) {
  	if (err) {
			console.log(chalk.red.bold(`'${file}' already exists.`));
			process.exit(0)
  	} 
	});
	setTimeout(retrive, 5000)
	setTimeout(makeTestFile, 5000)
	setTimeout(decoding, 6000)
	setTimeout(makeTestDir, 6000)
	setTimeout(writing, 7000)
	setTimeout(makeJest, 7000);
	setTimeout(done, 7500)
}

module.exports = {
	testTemplate
}
