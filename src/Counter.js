import { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1)
	const setToZero = () => setCounter(0);

	return (
		<div>
			<Display counter={counter} />
            <Button text = 'Increase' handleClick={increaseByOne}/>
            <Button text = 'Decrease' handleClick={decreaseByOne}/>
            <Button text = 'Set zero' handleClick={setToZero}/>
		</div>
	);
};

export default Counter;
