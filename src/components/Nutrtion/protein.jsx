import { UserData } from "../../utils/Api/callDataMocked"
import protein from "../../assets/protein.svg"

function Protein(props) {
 
    const {id} = props

    const proteins = UserData(id)

return(
    <section>
        <img src={protein} alt="protein" />
        <span>{proteins.keyData.proteinCount}Kcal</span>
        <span>Proteins</span>
    </section>

)
}

export default Protein