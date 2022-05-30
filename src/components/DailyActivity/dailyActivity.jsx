import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,  } from "recharts";
import colors from "../../utils/style/colors";
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
         <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    width={835}
                    height={320}
                    data={userDailyActivity}
                    barCategoryGap="35%"
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                    }}
                >
                <CartesianGrid
                    strokeDasharray="1 3" 
                    vertical={false}
                />    
                <XAxis dataKey="day" />
                <YAxis orientation="right" />
                <Tooltip />
                <Legend />
                <Bar 
                    dataKey="kilogram"  
                    fill={colors.Grey}
                    maxBarSize={8} 
                    radius={[50, 50, 0, 0]}
                    />
                <Bar 
                    dataKey="calories" 
                    fill={colors.RedGraph}
                    maxBarSize={8}
                    radius={[50, 50, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        );
      
}

export default DailyActivity