const USER = 'darkdarcool';
const PASS = process.env['password'];
const REPO = 'github.com/darkdarcool/lol';

const git = require('simple-git');
const remote = `https://${USER}:${PASS}@${REPO}`;

git().silent(true)
  .clone(remote)