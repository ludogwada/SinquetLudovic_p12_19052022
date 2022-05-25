import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { ApiPerformance } from "../../utils/Api/callApi";

function Performance() {

    const {userId} = useParams({})

    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
      const getPerformance = async ()=>{
        const data = await ApiPerformance(userId)
        setUserPerformance(data.data.data)
      }
      getPerformance()
    },[userId])

return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={userPerformance}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

export default Performance
