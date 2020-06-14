import React, { Component } from 'react';
import Calendar from './Calendar';
import League from './League';

class MatchFinder extends Component {
	render() {
		return (
			<div>
				<League />
				<Calendar />
			</div>
		);
	}
}

export default MatchFinder;
