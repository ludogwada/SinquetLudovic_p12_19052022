import PropTypes from "prop-types"
import calorie  from "../../assets/calorie.svg"
import lipid from "../../assets/lipid.svg"
import protein from "../../assets/protein.svg"
import carbohydrate from "../../assets/carbohydrate.svg"

function KeyData({Data}) {

   
    return(

        <section className="keyData">
            <section className="keyData__count" >
                    <img className="keyData__icon" src={calorie} alt="icon calorie" />
                <span className="keyData__number"> {Data.calorieCount}Kcal
                    <p className="keyData__text">Calories</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={protein} alt="icon protein" />
                <span className="keyData__number"> {Data.proteinCount}g
                    <p className="keyData__text">Proteines</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={carbohydrate} alt="icon carbohydrate" />
                <span className="keyData__number"> {Data.carbohydrateCount}g
                    <p className="keyData__text">Glucides</p>
                </span>
            </section>
            <section className="keyData__count">
                    <img className="keyData__icon" src={lipid} alt="icon lipid" />
                <span className="keyData__number"> {Data.lipidCount}g
                    <p className="keyData__text">Lipides</p>
                </span>
            </section>
        </section>
    )
}

// KeyData.propTypes = {
//     Data: PropTypes.array
// }

export default KeyData