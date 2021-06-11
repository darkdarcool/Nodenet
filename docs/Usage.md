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

## Templates

This command will give you templates that can be used for quick starting projects. There are few currently operational, but more are coming out every day!

Here is how you use the command:

``` shell
nodenet new templatename
```
If you would like the see a list of templates, please do:

``` shell
nodenet new
```
And then the templates name and description will come up.

When you decide which template to use, it makes a dir, and the dir's name is defaulting to a not very exciting or related to your projects name, so to change it you can make the outDir name like this:

``` shell
nodenet new templatename -o myDirName
```
And then nodenet will clone your files into your dir! And you will have quick started a project!

### Run

Run is a command that is very simple, it runs scripts from your package.json using npm.

When you make package.json, there is a scripts part to it with all of the commands and what you want them to do. Nodenet will do the same by using npm. 

Say you have a build command in your scripts in your package.json, in npm you would do:

``` shell
npm run build
```
And in Nodenet, it's practicly the same! If you do:

```
nodenet run build
```
It will run the same command! But if you want colors, make sure to find out how to force them, or nodenet can't render thim in your terminal!

# Conclusion

That's all of the commands for now, Nodenet is still in beta and is constantly changing, and I hope to see you using it!

Bye!