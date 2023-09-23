const Notes = ({ notes = [], showAll }) => {
	const notesToShow = showAll ? notes : notes.filter((note) => note.important);

	return notesToShow.map((note, i) => {
		return <li key={note.id}>{note.content}</li>;
	});
};

export default Notes;
