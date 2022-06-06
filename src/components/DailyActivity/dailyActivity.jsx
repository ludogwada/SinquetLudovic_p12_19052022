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

        return (
            <section className="dailyActivity">
                <ResponsiveContainer >
                        <BarChart
                            data={userDailyActivity}
                            barCategoryGap="35%"
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}>
                        <CartesianGrid strokeDasharray="1 1" vertical={false}/> 
                        <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1" />
                        <YAxis  dataKey="kilogram" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                        <YAxis  dataKey="kilogram" domain={[100,500]}  hide={true}/>
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
                        <Legend />
                        <Bar 
                            dataKey="kilogram"  
                            fill="#282D30"
                            maxBarSize={7} 
                            radius={[50, 50, 0, 0]}
                            />
                        <Bar 
                            dataKey="calories" 
                            fill="#E60000"
                            maxBarSize={7}
                            radius={[50, 50, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </section>
        );
      
}

export default DailyActivity