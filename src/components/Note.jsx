import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note({ note, handleDelete }) {
	return (
		<div
			key={note.id}
			className="p-4 bg-white text-black rounded-lg shadow-md border-l-4 mt-4"
			style={{
				borderLeftColor:
					note.priority === "high"
						? "red"
						: note.priority === "medium"
							? "orange"
							: "green",
			}}
		>
			<h3 className="text-lg font-bold">{note.title}</h3>
			<p className="text-sm text-gray-600">
				<strong>Category: </strong> {note.category}
			</p>
			<p className="text-sm text-gray-600">
				<strong>Priority: </strong> {note.priority}
			</p>
			<p className="mt-2">{note.description}</p>

			<AiFillDelete
				onClick={() => handleDelete(note.id)}
				color="red"
				size={24}
				className="mt-4 cursor-pointer"
			/>
		</div>
	);
}

export default Note;
