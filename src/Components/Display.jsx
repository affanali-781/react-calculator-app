import React from "react";

const Display = () => {
	return (
		<div className="w-full h-[100px] border-[3px] border-red-300 p-4">
			<input
				type="number"
				min="0"
				max="999999999"
				onChange={(e) => {
					const value = e.target.value;
					if (value === "") return; // allow empty input
					const num = Number(value);
					if (num < 0) e.target.value = "";
					if (num > 999999999) e.target.value = "999999999";
				}}
				className="w-full h-full outline-none border-none text-3xl text-bold px-3 text-right appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
			/>
		</div>
	);
};

export default Display;
