import { UserData } from "../../utils/Api/callDataMocked"
import lipid from "../../assets/lipid.svg"

function Lipid(props) {
 
    const {id} = props

    const lipids = UserData(id)

return(
    <section>
        <img src={lipid} alt="lipid" />
        <span>{lipids.keyData.lipidCount}Kcal</span>
        <span>Lipids</span>
    </section>

)
}

export default Lipid