import React, { Component } from 'react';
import MatchTemplate from './MatchTemplate/MatchTemplate';
import MatchFinder from './MatchFinder';
import Match from './Match';

class App extends Component {
	render() {
		return (
			<div>
				<MatchTemplate header={<MatchFinder />}>
					<Match />
				</MatchTemplate>
			</div>
		);
	}
}

export default App;
