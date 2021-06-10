var chalk = require('chalk');
const { exec } = require('child_process');
function add() {
  if (process.argv[3] == undefined) {
    console.log(chalk.red.bold("Package cannot be null"));
  }
  else {
    exec(`npm i ${process.argv[3]}`, (err, stdout, stdin) => {
        if (err) {
          console.log(chalk.red.bold("Package does not exist."))
          process.exit(0)
        }
        else {
          console.log(stdout)
        }
    });
  }
}
module.exports = add;