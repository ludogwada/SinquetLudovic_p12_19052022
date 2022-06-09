import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Legend, RadialBar, RadialBarChart } from "recharts";
import { ApiUser } from "../../utils/Api/callApi";

function Score() {

    const {userId} = useParams({}) 

    const [userScore, setUserScore] = useState([])

    useEffect(()=> {
        const getScore = async ()=> {
            const data = await ApiUser(userId)
            const score = data.data.todayScore 
            setUserScore(score)
        }
        getScore()
    }, [userId])

    const modelData = [
		{ name: "score", value: 1 - userScore, fill: "transparent" },
		{ name: "score", value: userScore, fill: "red" },
    ]
    return (
        <section className="score">
            <RadialBarChart
                width={258}
                height={263}
                outerRadius={150}
                data={modelData}
                startAngle={90}
                endAngle={450}
                
                >
                <RadialBar
                background
                barSize={10}
                cornerRadius={10}
                dataKey="value"
                />
            </RadialBarChart>
            <div className="legend">
                <span className="legend__score">{userScore*100}%
                    <p className="legend__text">de votre objectif</p>
                </span>
            </div>
        </section>
    )
}

export default Score