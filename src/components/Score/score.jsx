import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiUser } from "../../utils/Api/callApi";

function Score() {

    const {userId} = useParams({}) 

    const [userScore, setUserScore] = useState([])

    useEffect(()=> {
        const getScore = async ()=> {
            const data = await ApiUser(userId)
            setUserScore(data.data.todayScore)
        }
        getScore()
    }, [userId])

    return (
        <div>{userScore}</div>
    )
}

export default Score