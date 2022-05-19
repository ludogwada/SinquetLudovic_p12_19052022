// import { Navigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import { USER_MAIN_DATA } from "../../datas/data";
import styled from "styled-components";
import colors from "../../utils/style/colors";

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

    
    const userId = 12
    const userData = USER_MAIN_DATA

    let user = userData.find( user => user.id === userId)

    

    return(
        <main>
            <Sidebar />
            <DashboardPage>
                <Hello>Bonjour<Name>{ user.userInfos.firstName }</Name></Hello>
                <Quote>Félicitation ! Vous avez explosé vos objectifs hier 👏</Quote>
                {/* <DailyActivity></DailyActivity> */}
                {/* <AverageSession></AverageSession> */}
                {/* <UserPerformance></UserPerformance> */}
                {/* <Score></Score> */}
                {/* <Calorie></Calorie> */}
                {/* <Carbohydrate></Carbohydrate> */}
                {/* <Lipid></Lipid> */}
                {/* <Protein></Protein> */}
                   
            </DashboardPage>
        </main>
    )
}

export default Dashboard