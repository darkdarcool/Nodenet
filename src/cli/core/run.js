var chalk = require('chalk');
const { exec } = require('child_process');
function run() {
  if (process.argv[3] == undefined) {
    console.log("Cannot run 'null'")
  }

  else {
    console.log(chalk.green.bold("Make sure to force colors when running!"))
    exec(`npm run ${process.argv[3]}`, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      }
      console.log(stdout)
      // console.log(stderr)
    }); 
  }
}
module.exports = run;