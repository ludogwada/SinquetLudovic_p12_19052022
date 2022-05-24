import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import { AverageActivity } from "../../utils/Api/callDataMocked";

function AverageSessions(props) {

    const {id} = props

    const UserAverageSession = AverageActivity(id)
    const data = UserAverageSession.sessions

    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="session"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
    )
}

export default AverageSessions