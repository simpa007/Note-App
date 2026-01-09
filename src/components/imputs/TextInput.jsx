import React from "react";

const TextInput = ({ label, name, value, handleChange, required = false }) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block font-semiboold">
				{label}
			</label>
			<input
				className="w-full p-2 border rounded-lg"
				name={name}
				type="text"
				value={value}
				onChange={handleChange}
				required={required}
			/>
		</div>
	);
};

export default TextInput;
