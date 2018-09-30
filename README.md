# NotesApp
This is a console application to manage personal notes built using NodeJS and JSON.

This app when loaded displays CRUD operations 
  1. Add a new note //adds a new note to the notes-data.json file
  2. List all notes //lists all the notes from the notes-data.json file
  3. Remove a note //removes note from the notes-data.json file. The parameter for fetching the note is 'title' of the note
  4. Read a specific note //reads note notes-data.json file. The parameter for fetching the note is 'title' of the note

All the notes are stored in JSON. Validation for this app comprises of not allowing the user to add two notes with same content.

A logger is implemented to affirm the operations performed like note added, deleted, etc.
