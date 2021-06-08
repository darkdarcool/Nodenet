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
Let's break it down. We call the `test` command, and then we declare the file we want tested, and nodenet 