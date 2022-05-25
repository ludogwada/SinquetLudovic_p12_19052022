import axios from "axios"


async function ApiUser(id) {
    try {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

async function ApiActivity(id) {
    try {
        const res = await axios.get(`http://localhost:3000/user/${id}/activity`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

async function ApiAverage(id) {
    try {
        const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

async function ApiPerformance(id) {
    try {
        const res = await axios.get(`http://localhost:3000/user/${id}/performance`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export { ApiUser, ApiActivity, ApiAverage, ApiPerformance}


