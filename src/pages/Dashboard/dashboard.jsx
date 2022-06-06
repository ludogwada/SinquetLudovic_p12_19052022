import DailyActivity from "../../components/DailyActivity/dailyActivity";
import Score from "../../components/Score/score";
import AverageSessions from "../../components/AverageActivity/averageActivity";
import Performance from "../../components/Performance/performance";
import KeyData from "../../components/KeyData/keyData";
import UserData from "../../components/UserData/userData";

    



function Dashboard() {
    
    return(
        <main>
            <article className="dashboardPage">
                <UserData />
                <section className="array">
                    <section className="charts">
                        <DailyActivity />
                        <section className="chartSquare">
                            <AverageSessions />
                            <Performance />
                            <Score />
                        </section>
                    </section>
                        <section className="nutriScore">
                            <KeyData />
                        </section>
                </section>
            </article>
        </main>
    )
}

export default Dashboard