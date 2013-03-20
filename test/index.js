#!/usr/bin/env node
 
var Mocha = require('mocha');
 
var mocha = new Mocha;
mocha.reporter('spec').ui('tdd');
 
mocha.addFile('test/usage.js');
mocha.addFile('test/parseProcStat.js');
 
var runner = mocha.run(function(){
  process.exit(0);
});