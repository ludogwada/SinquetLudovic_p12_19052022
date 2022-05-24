// import { Navigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useParams } from "react-router-dom";
import {UserData} from "../../utils/Api/callDataMocked";
import DailyActivity from "../../components/DailyActivity/dailyActivity";
import Calorie from "../../components/Nutrtion/calorie";
import Carbohydrate from "../../components/Nutrtion/carbohydrate";
import Lipid from "../../components/Nutrtion/lipid";
import Protein from "../../components/Nutrtion/protein";
import Score from "../../components/Score/score";
import AverageSessions from "../../components/AverageActivity/averageActivity";
import Performance from "../../components/Performance/performance";


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
    
    // const [userName, setUserName ] = useState({})
    
    // useEffect(() => {
    //     const fetchData = async ()=>{
    //         const currentUserName = await ApiUserName(userId)
    //         setUserName(currentUserName)
    //     }
        
        
    //     fetchData()
    // }, [userId])
    
    // console.log(userName);

    const user = UserData(userId)
    
    return(
        <main>
            <Sidebar />
            <DashboardPage>
                <Hello>Bonjour<Name>{user.userInfos.firstName}</Name></Hello>
                <Quote>Félicitation ! Vous avez explosé vos objectifs hier 👏</Quote>
                <DailyActivity
                    id = {userId} />
                <AverageSessions
                    id = {userId} />
                <Performance
                    id = {userId} />
                <Score 
                    id = {userId} />
                <Calorie 
                    id = {userId} />
                <Carbohydrate
                    id = {userId} />
                <Lipid
                    id = {userId} />
                <Protein 
                    id = {userId} />
               
                   
            </DashboardPage>
        </main>
    )
}

export default Dashboard