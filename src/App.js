import { useState, useEffect } from 'react';
// import axios from 'axios';
import logo from './logo.svg';
import noteService from './services/notes';
import './App.css';
import Notes from './components/Notes';
import Form from './components/Form';
import Button from './components/Button';
// import Hello from './components/Hello';
// import Counter from './components/Counter';

// const initialNotes = [
// 	{
// 		id: 1,
// 		content: 'HTML is easy',
// 		date: '2019-05-30T17:30:31.098Z',
// 		important: true,
// 	},
// 	{
// 		id: 2,
// 		content: 'Browser can execute only JavaScript',
// 		date: '2019-05-30T18:39:34.091Z',
// 		important: false,
// 	},
// 	{
// 		id: 3,
// 		content: 'GET and POST are the most important methods of HTTP protocol',
// 		date: '2019-05-30T19:20:14.298Z',
// 		important: true,
// 	},
// ];

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [showAll, setShowAll] = useState(true);

	const hook = () => {
		noteService
			.getAll()
			.then((response) => {
				setNotes(response.data);
			})
			.catch((error) => {
				console.log('error', error);
			});
	};

	useEffect(hook, []);

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			// id: notes.length + 1,
		};

		noteService.create(noteObject).then((response) => {
			setNotes(notes.concat(response.data));
			setNewNote('');
		});
	};

	const handleNoteChange = (event) => {
		setNewNote(event.target.value);
	};

	const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id);
		const changedNote = { ...note, important: !note.important };

		noteService
			.update(id, changedNote)
			.then((response) => {
				setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
			})
			.catch((error) => {
				alert(`the note '${note.content}' was already deleted from server`);
				setNotes(notes.filter((n) => n.id !== id));
			});
	};

	const wipeOut = (id) => {
		noteService.wipeOut(id).then((response) => {
			noteService.getAll().then((response) => {
				setNotes(response.data);
			});
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <Hello name={'George Lucas'}/>
				<Hello name={'Daisy Ridley'}/>
				<Hello name={'John Boyega'}/>
				<Hello name={'Oscar Isaac'}/> */}
				{/* <Hello name={'Adam Driver'} age={39} /> */}
				{/* <Counter /> */}
				<div>
					<h1>Notes {':)'}</h1>
					<ul>
						<Notes
							notes={notes}
							showAll={showAll}
							toggleImportanceOf={toggleImportanceOf}
							wipeOut={wipeOut}
						/>
					</ul>
					<Button
						text={showAll ? 'Show only important notes' : 'Show all notes'}
						handleClick={() => {
							setShowAll(!showAll);
						}}
					/>
					<h2>Form</h2>
					<Form
						addNote={addNote}
						newNote={newNote}
						handleNoteChange={handleNoteChange}
					/>
				</div>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
			</header>
		</div>
	);
};

export default App;
