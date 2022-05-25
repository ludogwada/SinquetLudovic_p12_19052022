import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiUser } from "../../utils/Api/callApi"

function KeyData() {

    const {userId} = useParams({})

    const [userKeyData, setUserKeyData] = useState([])

    useEffect(() => {
        const getKeyData = async () => {
            const data = await ApiUser(userId)
            setUserKeyData(data.data.keyData)
        }
        getKeyData()
    }, [userId])

    return(

        <section>
            
            <div>{userKeyData.calorieCount}</div>
            <div>{userKeyData.proteinCount}</div>
            <div>{userKeyData.carbohdrateCount}</div>
            <div>{userKeyData.lipidCount}</div>
        </section>
    )
}

export default KeyData