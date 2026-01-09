import React from "react";
import { useState } from "react";
import TextInput from "./imputs/TextInput";
import SelectInput from "./imputs/SelectInput";
import { TextArea } from "./imputs/TextArea";
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
					<TextInput
						label="Title"
						name="title"
						value={formData.title}
						required
					/>
					<SelectInput
						label="Priority"
						name="priority"
						value={formData.priority}
						handleChange={handleChange}
						options={[
							{
								value: "high",
								name: "High",
							},
							{
								value: "medium",
								name: "Medium",
							},
							{
								value: "low",
								name: "Low",
							},
						]}
					/>
					<SelectInput
						label="Category"
						name="category"
						value={formData.category}
						handleChange={handleChange}
						options={[
							{
								value: "personal",
								name: "Personal",
							},
							{
								value: "work",
								name: "Work",
							},
							{
								value: "ideas",
								name: "Ideas",
							},
						]}
					/>
					<TextArea
						label="Description"
						name="description"
						value={formData.description}
						handleChange={handleChange}
					/>

					<button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
						Add Note
					</button>
				</form>
			)}
		</div>
	);
};

export default NoteForm;
