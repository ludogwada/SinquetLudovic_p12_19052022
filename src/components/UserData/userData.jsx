import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ApiUser } from "../../utils/Api/callApi";

function UserData() {

    const {userId} = useParams({})

    const [userData, setUserData] = useState([])

    useEffect(() => {
      const getUserData =  async() => {
          const data = await ApiUser(userId)
          setUserData(data.data.userInfos)
    } 
    getUserData()
    },[userId])

    return(
        <section>
            <span className="userHello">
                Bonjour<p className="userHello__name">{userData.firstName}</p>
            </span>
            <span className="userCongratulation">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </span>
        </section>
    )
}

export default UserData