import React from "react";

const Display = ({ clickedValue, operator, rememberValue }) => {
	return (
		<div className="w-full h-[120px] flex flex-col justify-center border-b border-white/20 px-4 py-3 text-right">
			{/* Small line showing previous value and operator */}
			<div className="text-gray-300 text-lg h-[30px]">
				{rememberValue && operator ? `${rememberValue} ${operator}` : ""}
			</div>

			{/* Main value display */}
			<input
				type="text"
				value={clickedValue}
				readOnly
				className="w-full bg-transparent outline-none border-none text-4xl font-semibold text-white text-right appearance-none 
				[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
			/>
		</div>
	);
};

export default Display;
