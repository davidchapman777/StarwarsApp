import Pic from '../Images/pic.jpeg'
import Character from "../components/Character"
import styled from "styled-components"
import Loading from '../components/Loading'
import { useCharacterContext } from '../context/charactersContext'
const CharactersPage = () => {
    const { person, isLoading } = useCharacterContext()
    if (isLoading) {
        return (
            <Loading/>
            )
    }
    
    return (
        <Wrapper>
                {person.map((item) => {
                    return <Character key={item.id}{...item} />
                })}
       </Wrapper>
    )

}
const Wrapper = styled.main`
background-image: url(${Pic});
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
margin-left: 1in;
margin-top: 1in;
`
export default CharactersPage