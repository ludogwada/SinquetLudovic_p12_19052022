import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,  } from "recharts";
import { ApiActivity } from "../../utils/Api/callApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DailyActivity() {

    const {userId} = useParams({})

    const [userDailyActivity, setUserDailyActivity] = useState([])

    useEffect(() => {
        const getActivity = async ()=>{
            const data = await ApiActivity(userId)
            setUserDailyActivity(data.data.sessions)
        }
        getActivity()
    },[userId])

    for (let i = 0 ;i<userDailyActivity.length; i++)
        {userDailyActivity[i].day = i+1}

    const renderColorfulLegendText = (value) => {
        return <span style={{ color:"#74798C", marginLeft:11, marginRight:32 }}>{value}</span>;
    }

        return (
            <section className="dailyActivity">
                <h2 className="dailyActivity__title">Activité quotidienne</h2>
                <ResponsiveContainer height={280} >
                        <BarChart
                            data={userDailyActivity}
                            barCategoryGap="35%"
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}>
                        <CartesianGrid strokeDasharray="1 1" vertical={false}/> 
                        <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1" />
                        <YAxis yAxisId="kilo"  dataKey="kilogram" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                        <YAxis  dataKey="calories" domain={[100,500]}  hide={true}/>
                        <Tooltip
                            itemStyle={{
                                color:"white",
                                backgroundColor: "#E60000",
                                fontSize: "7px",
                                margin: 0,
                                border: 0,
                                padding: "3px"
                            }}
                            contentStyle={{
                                padding: "7px",
                                backgroundColor: "#E60000", 
                                border: 0
                            }}
                            separator=" "
                            formatter={
                                (name, value) => [value,name]
                            }
                            labelStyle={{display: "none"}}
                            />
                        <Legend 
                            iconType="circle"
                            iconSize={8}
                            align="right"
                            verticalAlign="top"
                            wrapperStyle={{top:0, fontSize:14}}
                            formatter={renderColorfulLegendText}


                        />
                        <Bar 
                            yAxisId="kilo"
                            dataKey="kilogram"  
                            name="Poids (kg)"
                            fill="#282D30"
                            maxBarSize={7} 
                            radius={[50, 50, 0, 0]}
                            />
                        <Bar 
                            dataKey="calories"
                            name="Calories brûlées (KCal)" 
                            fill="#E60000"
                            maxBarSize={7}
                            radius={[50, 50, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        );
      
}

export default DailyActivity