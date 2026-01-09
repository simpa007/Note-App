import React from "react";

const SelectInput = ({ label, name, value, handleChange, options }) => {
	return (
		<div className="mb-4">
			<label htmlFor={name} className="block font-semiboold">
				{" "}
				{label}
			</label>
			<select
				className="w-full p-2 border rounded-lg"
				name={name}
				value={value}
				onChange={handleChange}
			>
				{options.map((option) => {
					return (
						<div key={option.value}>
							<option value={option.value}>{option.name}</option>
						</div>
					);
				})}

				{/* <option value="medium">Medium</option>
				<option value="low">Low</option> */}
			</select>
		</div>
	);
};

export default SelectInput;
