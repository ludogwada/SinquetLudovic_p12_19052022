import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * display of performance chart
 * @param {array} Data
 * @returns Performance radar chart
 */

function Performance({ Data }) {
	return (
		<section className='performance'>
			<RadarChart
				outerRadius={85}
				width={258}
				height={263}
				data={Data}
				margin={{ left: 10, right: 10 }}>
				<PolarGrid />
				<PolarAngleAxis
					dataKey='kind'
					stroke='white'
					tickLine={false}
					axisLine={false}
					tick={{ fontSize: 10 }}
				/>
				<PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
				<Radar dataKey='value' fill='#FF0101B3' fillOpacity={0.6} />
			</RadarChart>
		</section>
	);
}
Performance.propTypes = {
	Data: PropTypes.array,
};

export default Performance;
