import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {XAxis,Tooltip, AreaChart, Area} from "recharts";
import { ApiAverage } from "../../utils/Api/callApi";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Wrapper = styled.section`
    display: flex;
    width : 258px;
    height: 263px;
    background-color: ${colors.Red};
    color: ${colors.White};
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
`

 const TitleChart = styled.div`
    position: absolute;
    width: 148px;
    height: 57px;
    margin-top: 29px;
    margin-left: 34px;
    opacity: 0.5;
    
`

const H2 = styled.h2`
    font-size: 15px;
`

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
        <Wrapper>
            <TitleChart>
                <H2>Durée moyenne des sessions</H2>
            </TitleChart>
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
        </Wrapper>
    )
}

export default AverageSessions