import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DailyActivity from '../components/DailyActivity/dailyActivity';
import Score from '../components/Score/score';
import AverageSessions from '../components/AverageActivity/averageActivity';
import Performance from '../components/Performance/performance';
import KeyData from '../components/KeyData/keyData';
import UserData from '../components/UserData/userData';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	DataActivity,
	DataAverage,
	DataPerformance,
	DataUser,
} from '../utils/Api/callApi';
import Error from './error';
import Loader from '../components/Loader/loader';
// import {
// 	DataActivity,
// 	DataAverage,
// 	DataPerformance,
// 	DataUser,
// } from '../../utils/Api/callDataMocked';

/**
 * receive all data for each component and complete the dashboard
 * @returns dashboard of user
 */

function Dashboard() {
	const { userId } = useParams({});

	const [userData, setUserData] = useState([]);
	const [userAverageSession, setUserAverageSession] = useState([]);
	const [userDailyActivity, setUserDailyActivity] = useState([]);
	const [userKeyData, setUserKeyData] = useState([]);
	const [userPerformance, setUserPerformance] = useState([]);
	const [userScore, setUserScore] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const fetchData = async () => {
			try {
				const getUserData = await DataUser(userId);
				setUserData(getUserData.data.userInfos);

				const getAverage = await DataAverage(userId);
				const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
				getAverage.data.sessions.map(
					(session, index) => (session.name = days[index])
				);
				setUserAverageSession(getAverage.data.sessions);

				const getActivity = await DataActivity(userId);
				setUserDailyActivity(getActivity.data.sessions);

				const getKeyData = await DataUser(userId);
				setUserKeyData(getKeyData.data.keyData);

				const getPerformance = await DataPerformance(userId);
				const formatData = getPerformance.data.data.map((data) => {
					switch (data.kind) {
						case 1:
							return { ...data, kind: 'Cardio' };
						case 2:
							return { ...data, kind: 'Energie' };
						case 3:
							return { ...data, kind: 'Endurance' };
						case 4:
							return { ...data, kind: 'Force' };
						case 5:
							return { ...data, kind: 'Vitesse' };
						case 6:
							return { ...data, kind: 'Intensité' };
						default:
							return { ...data };
					}
				});
				setUserPerformance(formatData);

				const getScore = await DataUser(userId);
				const score = getScore.data.todayScore || getScore.data.score;
				setUserScore(score);
			} catch (err) {
				setError(true);
			} finally {
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			}
		};

		fetchData();
	}, [userId]);

	return isLoading === true ? (
		<Loader />
	) : error === false ? (
		<main>
			<article className='dashboardPage'>
				<UserData Data={userData} />
				<section className='allCharts'>
					<section className='charts'>
						<DailyActivity Data={userDailyActivity} />
						<section className='chartSquare'>
							<AverageSessions Data={userAverageSession} />
							<Performance Data={userPerformance} />
							<Score Data={userScore} />
						</section>
					</section>
					<section className='nutriScore'>
						<KeyData count={userKeyData} />
					</section>
				</section>
			</article>
		</main>
	) : (
		<Error />
	);
}

Dashboard.propTypes = {
	getUserData: PropTypes.string,
	getAverage: PropTypes.object,
	getActivity: PropTypes.object,
	getKeyData: PropTypes.object,
	getPerformance: PropTypes.object,
	getScore: PropTypes.number,
};
export default Dashboard;
