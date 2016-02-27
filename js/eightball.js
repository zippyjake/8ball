#!/usr/bin/env node

'use strict';

var c = require("skilstak-colors");

console.log(c.clear)

function print(message) {
   //console.log(message)
  process.stdout.write(message + "\n")
}

print(c.multi("Welcome to the Magic Eightball!"));
