import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types"

function Performance({Data}) {

return (
  <section className="performance">

    <RadarChart
      width={258}
      height={263}
      outerRadius="70%"
      data={Data}
      margin={{left:10,right:10}}
      >
      <PolarGrid 
        radialLines={false}
        />
      
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        tick={{fontSize:10}}
        tickLine={false}
        axisLine={false}
        />
      
      <Radar
        dataKey="value"
        fill="#FF0101B3"
        fillOpacity={0.6}
        />
    </RadarChart>
  </section>
  );
}
Performance.propTypes = {
  Data: PropTypes.array}

export default Performance

