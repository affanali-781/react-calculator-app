import React from "react";
import Display from "./Components/Display";

const Button = ({ children, className, onClick }) => (
	<button
		className={`flex items-center justify-center h-[70px] text-2xl font-semibold border border-gray-700 transition ${className}`}
		onClick={onClick}
	>
		{children}
	</button>
);

const App = () => {
	const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "00"];
	const operators = ["+", "-", "*", "/"];

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700">
			<div className="bg-gradient-to-b from-gray-800 to-gray-700 shadow-2xl rounded-xl w-[400px] overflow-hidden border border-gray-600">
				{/* Display */}
				<div className="border-b border-gray-600 h-[100px] flex items-center justify-end px-4 text-white text-3xl">
					<Display />
				</div>

				{/* Top Row: CE | Empty | AC */}
				<div className="grid grid-cols-3 gap-2 p-2">
					<Button className="bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white">
						CE
					</Button>
					<div></div> {/* empty center */}
					<Button className="bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-white">
						AC
					</Button>
				</div>

				{/* Number & Operator Buttons */}
				<div className="grid grid-cols-3 gap-2 p-2">
					{/* Number Buttons */}
					{numbers.map((num) => (
						<Button
							key={num}
							className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white"
						>
							{num}
						</Button>
					))}

					{/* Operator Buttons */}
					{operators.map((op) => (
						<Button
							key={op}
							className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white"
						>
							{op}
						</Button>
					))}

					{/* Equal Button */}
					<Button className="col-span-3 bg-green-400 hover:bg-green-500 active:bg-green-600 text-white font-bold">
						=
					</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
