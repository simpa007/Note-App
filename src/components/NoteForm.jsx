import React from "react";
import { useState } from "react";
const NoteForm = ({ notes, setNotes }) => {
	const [formData, setFormData] = useState({
		title: "",
		priority: "medium",
		category: "work",
		description: "",
	});
	const [isFormVisible, setIsFormVisible] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate Data
		if (formData.title === "" || formData.description === "") return;
		//Create new object
		const newNote = { id: new Date(), ...formData };
		// Add New Notes
		setNotes([newNote, ...notes]);
		// Reset
		setFormData({
			title: "",
			priority: "medium",
			category: "work",
			description: "",
		});
	};

	return (
		<div>
			{/* Toggle Button */}
			<button
				onClick={() => setIsFormVisible(!isFormVisible)}
				className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 ru\ounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
			>
				{isFormVisible ? "Hide Forrm" : "Show Form"}
			</button>
			{isFormVisible && (
				<form onSubmit={handleSubmit} className="mb-6">
					<div className="mb-4">
						<label htmlFor="title" className="block font-semiboold">
							{" "}
							Title
						</label>
						<input
							className="w-full p-2 border rounded-lg"
							name="title"
							type="text"
							value={formData.title}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="priority" className="block font-semiboold">
							{" "}
							Priority
						</label>
						<select
							className="w-full p-2 border rounded-lg"
							name="priority"
							id=""
							value={formData.priority}
							onChange={handleChange}
						>
							<option value="high">High</option>
							<option value="medium">Medium</option>
							<option value="low">Low</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="" className="block font-semiboold">
							{" "}
							Category
						</label>
						<select
							className="w-full p-2 border rounded-lg"
							name="category"
							id=""
							value={formData.category}
							onChange={handleChange}
						>
							<option value="personal">Personal</option>
							<option value="work">Work</option>
							<option value="ideas">Ideas</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="" className="block font-semibold">
							Description
						</label>
						<textarea
							className="w-full p-2 border rounded-lg"
							name="description"
							type="text"
							value={formData.description}
							onChange={handleChange}
						></textarea>
					</div>

					<button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
						Add Note
					</button>
				</form>
			)}
		</div>
	);
};

export default NoteForm;
