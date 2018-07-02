const fs = require('fs');

var fetchNotes = () => {
	try{
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	}catch(e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	console.log(typeof notes);
	var note = {
		title,
		body
	};

	

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
		
	}else{
		console.log("Note title already exists");
	}

	
};

var getAll = () => {
	return fetchNotes();
};

var readNote = (title) => {
	var notes = fetchNotes();

	var findNote = notes.filter((note) => note.title === title);

	return findNote[0];
};

var delNote = (title) => {
	var notes = fetchNotes();

	var nodeToRem = notes.filter((note) => note.title !== title);

	saveNotes(nodeToRem);

	return notes.length !== nodeToRem.length;
};

var logNote = (note) => {
	debugger;
	console.log("----");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	delNote,
	logNote
};