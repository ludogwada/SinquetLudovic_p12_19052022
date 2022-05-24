import { UserActivity } from "../../utils/Api/callDataMocked";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from "recharts";

function DailyActivity(props) {

    const {id} = props

    const UserDailyActivity = UserActivity(id)
    const data = UserDailyActivity.sessions

    for (let i = 0 ;i<data.length; i++)
        {data[i].day = i+1}
    
        return (
                <BarChart
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
                    <Bar dataKey="Poids (kg)" fill="#8884d8" />
                    <Bar dataKey="Calories brulées (Kcal)" fill="#82ca9d" />
                </BarChart>
        );
      
}

export default DailyActivity