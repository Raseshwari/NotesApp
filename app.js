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
	var note = notes.addNote(argv.title, argv.body);
	if(note !== undefined){
		console.log("Note added");
		notes.logNote(note);

	}else{
		console.log("note not added");
	}
}else if(command === 'list'){
	allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s):`);
	allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
	var note = notes.readNote(argv.title);
	if(note){
		console.log("Note found");
		notes.logNote(note);
	}else{
		console.log('Note with title -' + argv.title + 'not found!');
	}
}else if(command === 'remove'){
	var noteDel = notes.delNote(argv.title);
	var msg = noteDel ? 'Note was removed' : 'No note found';
	console.log(msg);
}
else{
	console.log('Command not recognized');
}
