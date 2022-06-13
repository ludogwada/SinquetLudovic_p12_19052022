import { useState } from "react";
import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../datas/data";

function ApiUser(id) {
    
    const [userInfo] = useState(USER_MAIN_DATA)
    
    // eslint-disable-next-line
    let user = userInfo.find( user => user.id == id)
    console.log(user);
    return user;

}


function ApiActivity(id) {

    const [userActivity] = useState(USER_ACTIVITY)
    
    // eslint-disable-next-line
    let dailyActivity = userActivity.find( user => user.userId == id)

    return dailyActivity

}

function ApiAverage(id) {

    const [userAverageSession] = useState(USER_AVERAGE_SESSIONS)
    
    // eslint-disable-next-line
    let averageSession = userAverageSession.find( user => user.userId == id)

    return averageSession
}

function ApiPerformance(id) {

    const [userPerformance] = useState(USER_PERFORMANCE)
    
    // eslint-disable-next-line
    let performance = userPerformance.find( user => user.userId == id)

    return {performance}

}


export {ApiUser, ApiActivity, ApiAverage, ApiPerformance}


