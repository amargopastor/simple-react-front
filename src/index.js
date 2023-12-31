import React from 'react';
// import { reateRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const promise2 = axios.get('http://localhost:3001/foobar');
// console.log(promise2);

// const root = createRoot(document.getElementById('root'));
// root.render(<App tab="home" />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
