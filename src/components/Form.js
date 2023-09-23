import Button from './Button';

const Form = ({ addNote, newNote, handleNoteChange }) => {
	return (
		<form onSubmit={addNote}>
			<input value={newNote} onChange={handleNoteChange} />
			<div>
				<Button text={'Save'} type="submit" />
			</div>
		</form>
	);
};

export default Form;
