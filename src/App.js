import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import InfoBox from './InfoBox';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Content />
				<InfoBox />
			</div>
		);
	}
}

export default App;
