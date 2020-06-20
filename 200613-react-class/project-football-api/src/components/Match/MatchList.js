import React, { Component } from 'react';
import axios from 'axios';
import Match from './Match';

class MatchList extends Component {
	state = {
		loading: false,
		data: null,
	};

	getData = async () => {
		try {
			this.setState({
				loading: true,
			});

			const { startDate, endDate } = this.props.range;

			const response = await axios.get(
				`https://apiv2.apifootball.com/?action=get_events&from=${startDate}&to=${endDate}&league_id=${this.props.leagueId}&APIkey=e3ea068b4c929619c4f9c0783c098a549f99a467a807fbf95ba555d04b6036de`,
			);

			this.setState({
				data: response.data,
			});
		} catch (e) {
			console.error(e);
		}

		this.setState({
			loading: false,
		});
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.range !== prevProps.range ||
			this.props.leagueId !== prevProps.leagueId
		) {
			this.getData();
		}
	}

	render() {
		const { data, loading } = this.state;

		return (
			<div>
				{loading && <h3 style={{ textAlign: 'center' }}>데이터 로딩 중 입니다....</h3>}
				{!loading &&
				data &&
				!data.error && /* 결과 값이 없을 경우 방어 */
				data.map(d => <Match key={d.match_id} data={d} />)}
			</div>
		);
	}
}

export default MatchList;