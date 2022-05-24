import { useState } from "react";
import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../datas/data";

function UserData(id) {
    
    const [userInfo] = useState(USER_MAIN_DATA)

    let user = userInfo.find( user => user.id == id)

    return user;

}

function UserActivity(id) {

    const [userActivity] = useState(USER_ACTIVITY)

    let dailyActivity = userActivity.find( user => user.userId == id)

    return dailyActivity

}

function AverageActivity(id) {

    const [userAverageSession] = useState(USER_AVERAGE_SESSIONS)

    let averageSession = userAverageSession.find( user => user.userId == id)

    return averageSession
}

function UserPerformance(id) {

    const [userPerformance] = useState(USER_PERFORMANCE)

    let performance = userPerformance.find( user => user.userId == id)

    return performance

}

export {UserData, UserActivity, AverageActivity, UserPerformance}


