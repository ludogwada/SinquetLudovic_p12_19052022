import { useParams } from "react-router-dom";
import { useState } from "react";
import DailyActivity from "../../components/DailyActivity/dailyActivity";
import Score from "../../components/Score/score";
import AverageSessions from "../../components/AverageActivity/averageActivity";
import Performance from "../../components/Performance/performance";
import KeyData from "../../components/KeyData/keyData";
import UserData from "../../components/UserData/userData";
import { useEffect } from "react";
import { ApiActivity, ApiAverage, ApiPerformance, ApiUser } from "../../utils/Api/callApi";


function Dashboard() {

const {userId} = useParams({})

const [userData, setUserData] = useState([])
const [userAverageSession, setUserAverageSession] = useState([])
const [userDailyActivity, setUserDailyActivity] = useState([]);
const [userKeyData, setUserKeyData] = useState([])
const [userPerformance, setUserPerformance] = useState([])
const [userScore, setUserScore] = useState([])



useEffect(() => {
    const fetchData = async() => {
        const getUserData =  await ApiUser(userId)
            setUserData(getUserData.data.userInfos)
          
        const getAverage = await ApiAverage(userId)
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        getAverage.data.sessions.map((session, index) => (
            session.name = days[index]
        ))
        setUserAverageSession(getAverage.data.sessions)

        const getActivity = await ApiActivity(userId)
        setUserDailyActivity(getActivity.data.sessions)
    
        const getKeyData = await ApiUser(userId)
        setUserKeyData(getKeyData.data.keyData)

        const getPerformance = await ApiPerformance(userId)
        const formatData = getPerformance.data.data.map((data) =>{
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
              
        const getScore = await ApiUser(userId)
            const score = getScore.data.todayScore || getScore.data.score
            setUserScore(score)
    }
    fetchData()
}, [userId])

    return(
        <main>
            <article className="dashboardPage">
                <UserData 
                    Data={userData}/>
                <section className="allCharts">
                    <section className="charts">
                        <DailyActivity
                            Data={userDailyActivity} />
                        <section className="chartSquare">
                            <AverageSessions
                                Data={userAverageSession} />
                            <Performance
                                Data={userPerformance} />
                            <Score 
                                Data={userScore}/>
                        </section>
                    </section>
                        <section className="nutriScore">
                            <KeyData 
                            Data={userKeyData}/>
                        </section>
                </section>
            </article>
        </main>
    )
}

export default Dashboard