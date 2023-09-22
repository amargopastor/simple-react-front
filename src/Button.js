const Button = ({ text, handleClick }) => {
	return <button className="App-button" onClick={handleClick}>{text}</button>;
};

export default Button;
