const Notes = ({ notes = [], showAll, toggleImportanceOf, wipeOut }) => {
	const notesToShow = showAll ? notes : notes.filter((note) => note.important);

	return notesToShow.map((note, i) => {
		return (
			<li key={note.id}>
				{note.content}
				<button onClick={() => toggleImportanceOf(note.id)}>change!</button>
				<button onClick={() => wipeOut(note.id)}>delete</button>
			</li>
		);
	});
};

export default Notes;
