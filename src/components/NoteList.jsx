import React from "react";

const NoteList = ({ notes }) => {
	if (notes.length === 0) {
		return <p className="text-center text-xl font-medium mt-3">No Notes</p>;
	}
	return (
		<div>
			{notes.map((note) => (
				<div
					key={note.id}
					className="p-4 bg-white text-black rounded-lg shadow-md border-l-4"
				>
					<h3 className="text-lg font-bold">{note.title}</h3>
					<p className="text-sm text-gray-600">
						<strong>Category: </strong> {note.category}
					</p>
					<p className="text-sm text-gray-600">
						<strong>Priority: </strong> {note.priority}
					</p>
					<p className="mt-2">{note.description}</p>
				</div>
			))}
		</div>
	);
};

export default NoteList;
