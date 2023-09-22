import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';

const App = () => {


	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
        {/* <Hello name={'George Lucas'}/>
        <Hello name={'Daisy Ridley'}/>
        <Hello name={'John Boyega'}/>
        <Hello name={'Oscar Isaac'}/> */}
        <Hello name={'Adam Driver'} age={39}/>
        <Counter/>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
			</header>
		</div>
	);
};

export default App;
