import { UserData } from "../../utils/Api/callDataMocked";

function Score(props) {

    const {id} = props

    const score = UserData(id)
    const data = score.score

    return (
        <div>{data}</div>
    )
}

export default Score