import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ApiUser } from "../../utils/Api/callApi";
import colors from "../../utils/style/colors";
import styled from "styled-components";


const Hello = styled.span`
    display: flex;
    margin-top: 70px;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 500;
`

const Name = styled.h2`
    color: ${colors.Red};
    font-size: 48px;
    padding-left: 10px;
`

const Quote = styled.span`
    font-size: 18px;
    font-weight: 400;
`

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
            <Hello>Bonjour<Name>{userData.firstName}</Name></Hello>
            <Quote>Félicitation ! Vous avez explosé vos objectifs hier 👏</Quote>
        </section>
    )
}

export default UserData