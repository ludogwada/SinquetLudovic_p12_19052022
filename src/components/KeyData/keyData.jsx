import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ApiUser } from "../../utils/Api/callApi"
import calorie  from "../../assets/calorie.svg"
import lipid from "../../assets/lipid.svg"
import protein from "../../assets/protein.svg"
import carbohydrate from "../../assets/carbohydrate.svg"
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

        <section className="keyData">
            <section className="keyData__count" >
                    <img className="keyData__icon" src={calorie} alt="icon calorie" />
                <span className="keyData__number"> {userKeyData.calorieCount}Kcal
                    <p className="keyData__text">Calories</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={protein} alt="icon protein" />
                <span className="keyData__number"> {userKeyData.proteinCount}g
                    <p className="keyData__text">Proteines</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={carbohydrate} alt="icon carbohydrate" />
                <span className="keyData__number"> {userKeyData.carbohydrateCount}g
                    <p className="keyData__text">Glucides</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={lipid} alt="icon lipid" />
                <span className="keyData__number"> {userKeyData.lipidCount}g
                    <p className="keyData__text">Lipides</p>
                </span>
            </section>
        </section>
    )
}

export default KeyData