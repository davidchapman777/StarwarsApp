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
            <div className='div1'></div>
            <div>
                {person.map((item) => {
                    return <Character key={item.id}{...item} />
                })}
                </div>
       </Wrapper>
    )

}
const Wrapper = styled.main`

padding-bottom: 30vh;
.div1{
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(${Pic});
    background-position: center;
    background-size:cover ;

}
@media screen and (min-width:768px){
columns: 2;

}
@media screen and (max-width:850px) and (orientation: landscape){
columns: 3;
height: 140vh;

}
@media screen and (min-width:992px){
columns: 3;
height: 140vh;
}
`
export default CharactersPage