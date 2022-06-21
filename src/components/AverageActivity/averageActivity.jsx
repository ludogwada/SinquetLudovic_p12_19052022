import { XAxis, Tooltip, AreaChart, Area } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Display Average Session Chart
 * @param {array} Data
 * @returns Average session Chart
 */

function AverageSessions({ Data }) {
	return (
		<section className='averageGraph'>
			<p className='averageGraph__titleChart'>Durée moyenne des sessions</p>
			<AreaChart
				width={258}
				height={263}
				data={Data}
				margin={{ top: 50, right: 5, bottom: 30, left: 5 }}>
				<XAxis
					dataKey='name'
					tickLine={false}
					tickSize={30}
					axisLine={false}
					tick={{ fill: 'rgba(255, 255, 255, .5)' }}
				/>

				<Tooltip
					filterNull={false}
					separator=' '
					itemStyle={{
						color: '#000000',
						backgroundColor: '#ffffff',
						fontSize: '8px',
						padding: '0',
						margin: 0,
						border: 0,
					}}
					formatter={(name) => [name]}
					contentStyle={{
						padding: '1px',
						backgroundColor: '#ffffff',
						border: 0,
					}}
					labelStyle={{
						display: 'none',
					}}
				/>
				<Area
					type='natural'
					dataKey='sessionLength'
					stroke='#ffffff'
					activeDot={{
						stroke: 'rgba(255, 255, 255, .5)',
						strokeWidth: 10,
						r: 3,
					}}
					dot={false}
					unit='min'
					strokeWidth={2}
					connectNulls={true}
					fillOpacity={1}
					fill='rgba(255, 255, 255, .1)'
				/>
			</AreaChart>
		</section>
	);
}

AverageSessions.propTypes = {
	Data: PropTypes.array,
};

export default AverageSessions;
