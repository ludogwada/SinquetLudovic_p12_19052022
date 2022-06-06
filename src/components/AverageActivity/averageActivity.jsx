import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {XAxis,Tooltip, AreaChart, Area} from "recharts";
import { ApiAverage } from "../../utils/Api/callApi";

function AverageSessions() {

    const {userId} = useParams({})

    const [userAverageSession, setUserAverageSession] = useState([])

    useEffect(()=> {
      const getAverage = async ()=>{
        const data = await ApiAverage(userId)
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        data.data.sessions.map((session, index) => (
            session.name = days[index]
        ))
        setUserAverageSession(data.data.sessions)
      }
      getAverage()
    },[userId])

    return (
        <section className="averageGraph">
            <p className="averageGraph__titleChart">
                Durée moyenne des sessions
            </p>
            <AreaChart
                width={258}
                height={263}
                data={userAverageSession}
                margin={{ top: 50, right: 5, bottom: 30, left: 5 }}

            >
            <XAxis 
                dataKey="name"
                tickLine={false}
                tickSize={30}
                axisLine={false}
                tick={{fill: 'rgba(255, 255, 255, .5)'}}
                 />

            <Tooltip 
                filterNull={false}
                separator=" "
                itemStyle={{
                    color:"#000000",
                    backgroundColor: "#ffffff", 
                    fontSize:"8px", 
                    padding: "0",
                    margin: 0,
                    border: 0
                }} 
                formatter={
                    (name) => [name] 

                }
                contentStyle={{
                    padding: "1px",
                    backgroundColor: "#ffffff", 
                    border: 0
                }}
                labelStyle={{
                    display: "none"
                }}
            />
            <Area 
                type="natural" 
                dataKey="sessionLength" 
                stroke="#ffffff" 
                activeDot={{ stroke: 'rgba(255, 255, 255, .5)', strokeWidth: 10, r: 3 }}
                dot={false}
                unit="min"
                strokeWidth={2}
                connectNulls={true}
                fillOpacity={1} 
                fill="rgba(255, 255, 255, .1)"
            />
            </AreaChart>
        </section>
    )
}

export default AverageSessions