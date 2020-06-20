import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './LeagueItem.scss';

class LeagueItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.selected !== nextProps.selected) {
			return true;
		} else return false;
	}
	
	render() {
		const { league_name, league_id, selected, setLeagueId } = this.props;

		return (
			<Fragment>
				<NavLink className={`league ${selected && 'selected'}`} to={`/${league_id}`} onClick={() => setLeagueId(league_id)}>
					{league_name}
				</NavLink>
			</Fragment>
		);
	}
}

export default LeagueItem;