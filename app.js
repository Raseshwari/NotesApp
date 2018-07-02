const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
}

bodyOptions = {
	describe: 'Note body',
	demand: true,
	alias: 'b'
}

const argv = yargs
	.command('add','Add a new note',{
		title:titleOptions,
		body:bodyOptions
	})
	.command('read', 'Read a Note',{
		title:titleOptions
	})
	.command('list', 'List all Notes')
	.command('remove', 'Remove a Note',{
		title:titleOptions
	})
	.help()
	.argv;

var command = argv._[0];
// console.log('process', command);
// console.log('yargs', argv);

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
