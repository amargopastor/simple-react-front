import Display from './Display';

const History = ({ allClicks = [], counter, clicks }) => {
	if (allClicks.length === 0)
		return <div>The app is used by pressing the buttons</div>;

	return (
		<div>
			<div>
				<Display text={'History:'} counter={allClicks.join(' ')} />
				<Display text={'Current count:'} counter={counter} />
				<Display text={'Left count:'} counter={clicks.left} />
				<Display text={'Right count:'} counter={clicks.right} />
			</div>
		</div>
	);
};

export default History;
