import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../datas/data";


async function ApiUser(id) {
    try {
        const res = USER_MAIN_DATA.find((el) => el.userId == id);
        return {data:res};
    } catch (e) {
        console.log(e);
    }
}

async function ApiActivity(id) {
    try {
        const res = USER_ACTIVITY.find((el) => el.userId == id);
        return {data:res};
    } catch (e) {
        console.log(e);
    }
}

async function ApiAverage(id) {
    try {
		const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
        return {data:res};
    } catch (e) {
        console.log(e);
    }
}

async function ApiPerformance(id) {
    try {
		const res = USER_PERFORMANCE.find((el) => el.userId == id);
        return {data:res};
    } catch (e) {
        console.log(e);
    }
}

export { ApiUser, ApiActivity, ApiAverage, ApiPerformance}

