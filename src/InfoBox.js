import React, { Component } from 'react';
import InfoItems from './InfoItems';

export default class InfoBox extends Component {
	render() {
		return (
			<div className="info">
				<InfoItems />
			</div>
		);
	}
}
