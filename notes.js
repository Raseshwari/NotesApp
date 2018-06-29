console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try{
		var noteString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	}catch(e){

	}

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		fs.writeFileSync('notes-data.json',JSON.stringify(notes));
	}else{
		console.log("Note title already exists");
	}

	
};

var getAll = () => {
	console.log("Getting all notes");
};

var readNote = (title) => {
	console.log("Reading Note - ", title);
};

var delNote = (title) => {
	console.log("Deleted note - ", title);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	delNote
};