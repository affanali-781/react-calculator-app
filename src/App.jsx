import React, { useState } from "react";
import Display from "./Components/Display";

const Button = ({ children, className, onClick, disabled }) => (
	<button
		className={`flex items-center justify-center h-[70px] text-2xl font-semibold rounded-xl shadow-md 
        backdrop-blur-md transition-transform transform hover:scale-105 active:scale-95 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
		onClick={!disabled ? onClick : undefined}
	>
		{children}
	</button>
);

const App = () => {
	const [clickedValue, setClickedValue] = useState("");
	const [rememberValue, setRememberValue] = useState(null);
	const [operator, setOperator] = useState(null);
	const [isResultDisplayed, setIsResultDisplayed] = useState(false);

	const numbers = [
		[9, 8, 7],
		[6, 5, 4],
		[3, 2, 1],
		[0, "00", "."],
	];
	const operators = ["+", "-", "*", "/"];

	const handleClick = (e) => {
		if (isResultDisplayed) return; // prevent input during result display

		const value = e.target.innerText;

		if (operators.includes(value)) {
			if (clickedValue === "" && rememberValue === null) return;

			if (operator && clickedValue === "") {
				setOperator(value);
				return;
			}

			setRememberValue(clickedValue || rememberValue);
			setOperator(value);
			setClickedValue("");
			return;
		}

		if (value === "AC") {
			setClickedValue("");
			setRememberValue(null);
			setOperator(null);
			return;
		}

		if (value === "CE") {
			setClickedValue("");
			return;
		}

		if (value === "=") {
			if (rememberValue !== null && clickedValue !== "" && operator !== null) {
				try {
					const expression = rememberValue + operator + clickedValue;
					const result = eval(expression);

					setClickedValue(result.toString());
					setRememberValue(result.toString());
					setOperator(null);

					// Lock input for 2 seconds
					setIsResultDisplayed(true);
					setTimeout(() => {
						setClickedValue("");
						setIsResultDisplayed(false);
					}, 2000);
				} catch {
					setClickedValue("Error");
					setIsResultDisplayed(true);
					setTimeout(() => {
						setClickedValue("");
						setRememberValue(null);
						setOperator(null);
						setIsResultDisplayed(false);
					}, 1500);
				}
			}
			return;
		}

		if (value === "." && clickedValue.includes(".")) return;

		setClickedValue((prev) => prev + value);
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 p-4">
			<div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl w-[400px] border border-white/20 overflow-hidden">
				{/* Display */}
				<div className="h-[120px] flex items-end justify-end p-6 text-white text-4xl font-light bg-gradient-to-b from-gray-900/50 to-gray-800/30 border-b border-white/20 rounded-t-3xl">
					<Display
						clickedValue={clickedValue || "0"}
						operator={operator}
						rememberValue={rememberValue}
					/>
				</div>

				{/* Top Row */}
				<div className="grid grid-cols-3 gap-3 p-3 bg-white/5">
					<Button
						className="bg-gradient-to-r from-orange-500 to-red-400 text-white"
						onClick={handleClick}
						disabled={isResultDisplayed}
					>
						CE
					</Button>
					<div></div>
					<Button
						className="bg-gradient-to-r from-red-400 to-orange-500 text-white"
						onClick={handleClick}
						disabled={isResultDisplayed}
					>
						AC
					</Button>
				</div>

				{/* Main Buttons Grid */}
				<div className="grid grid-cols-4 gap-3 p-3 bg-white/5">
					{numbers.flat().map((num) => (
						<Button
							key={num}
							className="bg-white/10 text-white hover:bg-white/20"
							onClick={handleClick}
							disabled={isResultDisplayed}
						>
							{num}
						</Button>
					))}

					{operators.map((op) => (
						<Button
							key={op}
							className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold"
							onClick={handleClick}
							disabled={isResultDisplayed}
						>
							{op}
						</Button>
					))}

					<Button
						className="col-span-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold mt-2"
						onClick={handleClick}
						disabled={isResultDisplayed}
					>
						=
					</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
