import React from "react";

export const TextArea = ({ label, name, value, handleChange }) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block font-semibold">
				{label}
			</label>
			<textarea
				className="w-full p-2 border rounded-lg"
				name="description"
				type="text"
				value={value}
				onChange={handleChange}
			></textarea>
		</div>
	);
};
