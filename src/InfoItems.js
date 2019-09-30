import React, { Component } from 'react';

let arr = [
	{
		imgsrc: '/images/icon1.png',
		h1: 'Declatative',
		p: 'React makes it painless to create UIs.'
	},
	{
		imgsrc: '/images/icon2.png',
		h1: 'Components',
		p: 'React makes it painless to create UIs.'
	},
	{
		imgsrc: '/images/icon3.png',
		h1: 'Single-Way',
		p: 'React makes it painless to create UIs.'
	},
	{
		imgsrc: '/images/icon4.png',
		h1: 'JSX',
		p: 'React makes it painless to create UIs.'
	}
];

let items = arr.map((obj) => {
	return (
		<div className="info-container">
			<img src={obj.imgsrc} />
			<h1>{obj.h1}</h1>
			<p>{obj.p}</p>
		</div>
	);
});

export default class InfoItems extends Component {
	render() {
		return items;
	}
}
