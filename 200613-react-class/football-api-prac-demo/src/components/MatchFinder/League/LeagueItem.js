import React, { Component, Fragment } from 'react';
import './LeagueItem.scss';

class LeagueItem extends Component {
	render() {
		const { league_name } = this.props;

		return (
			<Fragment>
				<span className="league">{league_name}</span>
			</Fragment>
		);
	}
}

export default LeagueItem;
