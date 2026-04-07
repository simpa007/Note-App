import React from "react";
import Note from "./Note";

const NoteList = ({ notes, handleDelete }) => {
	if (notes.length === 0) {
		return <p className="text-center text-xl font-medium mt-3">No Notes</p>;
	}

	return (
		<div>
			{notes.map((note) => (
				<Note note={note} handleDelete={handleDelete} />
			))}
		</div>
	);
};

export default NoteList;
