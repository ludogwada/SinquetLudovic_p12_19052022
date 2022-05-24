import { UserData } from "../../utils/Api/callDataMocked"
import calorie from "../../assets/calorie.svg"

function Calorie(props) {
 
    const {id} = props

    const calories = UserData(id)

return(
    <section>
        <img src={calorie} alt="calorie" />
        <span>{calories.keyData.calorieCount}Kcal</span>
        <span>Calories</span>
    </section>

)
}

export default Calorie