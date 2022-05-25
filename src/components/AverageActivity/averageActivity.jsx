import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import { ApiAverage } from "../../utils/Api/callApi";

function AverageSessions() {

    const {userId} = useParams({})

    const [userAverageSession, setUserAverageSession] = useState([])

    useEffect(()=> {
      const getAverage = async ()=>{
        const data = await ApiAverage(userId)
        setUserAverageSession(data.data.sessions)
      }
      getAverage()
    },[userId])

    return (
        <LineChart
          width={258}
          height={263}
          data={userAverageSession}
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
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
    )
}

export default AverageSessions