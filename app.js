console.log("Starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
// console.log('process', command);
console.log('yargs', argv);

if(command === 'add'){
	notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
	notes.getAll();
}else if(command === 'read'){
	notes.readNote(argv.title);
}else if(command === 'remove'){
	notes.delNote(argv.title);
}
else{
	console.log('Command not recognized');
}
