import { UserData } from "../../utils/Api/callDataMocked"
import carbohydrate from "../../assets/carbohydrate.svg"

function Carbohydrate(props) {
 
    const {id} = props

    const carbohydrates = UserData(id)

return(
    <section>
        <img src={carbohydrate} alt="carbohydrate" />
        <span>{carbohydrates.keyData.carbohydrateCount}Kcal</span>
        <span>Carbohydrates</span>
    </section>

)
}

export default Carbohydrate