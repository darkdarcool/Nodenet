# Usage

Nodenet is similar in many ways to dotnet. It can run tests, give templates, and so much more!

# Layout

Layout are important on any ClI, it's how they are structured! So, lets start with the simple layout of commands.

``` shell
nodenet <command> [args]
```
It's very simple, and almost all other CLI's follow these simple rules!

# Commands

Here's where it get fun and somtimes complex. Let's start off with a simple help command if you ever get stuck.

``` shell
nodenet -h
```
If you want to see a list of commands, or forget the name of one, this is where to get it!

## Test 
Nodenet has built in [jest](https://jestjs.io) and [chitchatjs](https://github.com/darkdarcool/ChitChat) support. Nodenet defaults to jest, but is recommended for people who ***don't*** like jest. Here is a sample:

``` shell
nodenet test myfile.test.js
```
Let's break it down. We call the `test` command, and then we declare the file we want tested, and nodenet will ask jest to test that one file. But if you want to use ChitChat, do:

```
nodenet test -chit myfile.chit.js
```
And then nodenet will have ChitChat build the file.

## Install/Add

If you use node, you probably know what npm is, but incase you don't, here is what is means! 

NPM is Nodejs's packager, meaning that you can make a module that does a specific thing, and other people can import it and use it! It is very similar to python's packager _pip_. 

Anyway, not that you know what npm is, we can explain what Nodenet does.

Here is a sample of the command:
``` shell
nodenet add mynpmpackage
```
Add can also be `install`.

Then nodenet will compile down to bash and request the npm cli to install the package you request and will give the the output in the files and terminal the npm returns.