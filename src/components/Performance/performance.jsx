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
        const formatData = data.data.data.map((data) =>{
          switch (data.kind) {
            case 1:
              return { ...data, kind: 'Cardio'}
            case 2:
              return { ...data, kind: 'Energie'}
            case 3:
              return { ...data, kind: 'Endurance'}
            case 4:
              return { ...data, kind: 'Force'}
            case 5:
              return { ...data, kind: 'Vitesse'}
            case 6:
              return { ...data, kind: 'Intensité'}
            default:
              return {...data }              
          }
        })
        setUserPerformance(formatData)
      }
      getPerformance()
    },[userId])

return (
  <section className="performance">

    <RadarChart
      width={258}
      height={263}
      outerRadius="70%"
      data={userPerformance}
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

export default Performance

