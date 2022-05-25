// import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useParams } from "react-router-dom";
import DailyActivity from "../../components/DailyActivity/dailyActivity";
import Score from "../../components/Score/score";
import AverageSessions from "../../components/AverageActivity/averageActivity";
import Performance from "../../components/Performance/performance";
import { useEffect, useState } from "react";
import { ApiUser } from "../../utils/Api/callApi";
import KeyData from "../../components/KeyData/keyData";


const DashboardPage = styled.article`
    display: flex;
    flex-direction: column;
    margin-left: 224px;
    `
    
const Hello = styled.span`
    display: flex;
    margin-top: 70px;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 500;
`

const Name = styled.h2`
    color: ${colors.Red};
    font-size: 48px;
    padding-left: 10px;
`

const Quote = styled.span`
    font-size: 18px;
    font-weight: 400;
`


function Dashboard() {
    
    let { userId } = useParams({})
    
    const [userName, setUserName ] = useState([])
    
    useEffect(() => {
        const getData = async ()=>{
            const data = await ApiUser(userId)
            setUserName(data.data.userInfos)
        }
        getData()
    }, [userId])
    
    return(
        <main>
            <DashboardPage>
                <Hello>Bonjour<Name>{userName.firstName}</Name></Hello>
                <Quote>Félicitation ! Vous avez explosé vos objectifs hier 👏</Quote>
                <DailyActivity />
                <AverageSessions />
                <Performance />
                <Score />
                <KeyData />
            </DashboardPage>
        </main>
    )
}

export default Dashboard