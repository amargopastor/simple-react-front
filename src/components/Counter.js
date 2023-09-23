import { useState } from 'react';
import Button from './Button';
import History from './History';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const [clicks, setClicks] = useState({ left: 0, right: 0 });
	const [allClicks, setAll] = useState([]);

	const increaseByOne = () => {
		setCounter(counter + 1);
		setAll(allClicks.concat('☝️'));
	};
	const decreaseByOne = () => {
		setCounter(counter - 1);
		setAll(allClicks.concat('👇'));
	};
	const setToZero = () => {
		setCounter(0);
		setAll(allClicks.concat('👌'));
	};

	const handleLeftClick = () => {
		setClicks({ ...clicks, left: clicks.left + 1 });
		setAll(allClicks.concat('👈'));
	};

	const handleRightClick = () => {
		setClicks({ ...clicks, right: clicks.right + 1 });
		setAll(allClicks.concat('👉'));
	};

	const restart = () => {
		setCounter(0);
		setClicks({ left: 0, right: 0 });
		setAll([]);
	};

	return (
		<>
		<History allClicks={allClicks} counter={counter} clicks={clicks}/>
			<div>
				<Button text="Left counter" handleClick={handleLeftClick} />
				<Button text="Right counter" handleClick={handleRightClick} />
			</div>
			<div>
				<Button text="Increase" handleClick={increaseByOne} />
				<Button text="Decrease" handleClick={decreaseByOne} />
				<Button text="Set zero" handleClick={setToZero} />
			</div>
			<div>
				<Button text="Re-start" handleClick={restart} />
			</div>
		</>
	);
};

export default Counter;
