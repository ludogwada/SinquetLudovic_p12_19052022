// import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";

import DailyActivity from "../../components/DailyActivity/dailyActivity";
import Score from "../../components/Score/score";
import AverageSessions from "../../components/AverageActivity/averageActivity";
import Performance from "../../components/Performance/performance";
import KeyData from "../../components/KeyData/keyData";
import UserData from "../../components/UserData/userData";

const Main = styled.main`
    display: flex;
    width: 100%;
`

const DashboardPage = styled.article`
    display: flex;
    flex-direction: column;
    margin-left: 224px;
    width: 80%
    `
    



function Dashboard() {
    
    return(
        <Main>
            <DashboardPage>
                <UserData />
                <DailyActivity />
                <AverageSessions />
                <Performance />
                <Score />
            </DashboardPage>
                <aside>
                    <KeyData />
                </aside>
        </Main>
    )
}

export default Dashboard