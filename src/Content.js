import React, { Component } from 'react';

export default class Content extends Component {
	render() {
		return (
			<div className="content-container">
				<div className="content-subcontainer">
					<div>
						<h1 className="content-heading-1">Say hello to ReactJS.</h1>
					</div>
					<div>
						<p className="content-p-1">
							You will learn a FrontEnd framework from scratch.io to become a Ninka Developer.
						</p>
					</div>
				</div>
				<div className="content-subcontainer" />
			</div>
		);
	}
}
