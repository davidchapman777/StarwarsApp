import { useState } from "react"
import styled from "styled-components"
import Saber1 from "./Saber1"
import Saber2 from "./Saber2"
import Saber3 from "./Saber3"
import Saber4 from "./Saber4"
import Saber5 from "./Saber5"
import Saber6 from "./Saber6"
import Saber7 from "./Saber7"
import Saber8 from './Saber8'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <Wrapper>
            <button className="button" onClick={toggleSidebar}>||||</button>
            {sidebar &&
            <div className="sabers">
            <Saber1 />
            <Saber2 />
            <Saber3 />
            <Saber4 />
            <Saber5 />
            <Saber6 />
            <Saber7 />
            <Saber8 />
            <button className="close" onClick={toggleSidebar}>X</button>    
            </div>
            }
        </Wrapper>
  )
}

const Wrapper = styled.div`

.button{
    position: fixed;
    font-size: 5vh;
    z-index: 1;
    background-color: black;
    color: white;
    border: .1vw solid white;
    padding:1vh;
    left: 1vh;
    border-radius: 10px;
    transform: rotate(90deg);
    top: 21vh;
}
.sabers{
    top:21.5vh;
    border: 4px solid black;
    position: relative;
    position: fixed;
    height: 100%;
    width: 15vh;
    margin-top:-1vh;
    background-image:linear-gradient(to bottom, #03fd03,#f07008, black);
    display: grid;
    z-index: 1;
}
.close{
    position: absolute;
    background: black;
    color: white;
    border: .1vw solid white;
    font-size: 3vh;
}
@media screen and (min-width:768px){
.sabers{
    top: 16.5vh;
    width: 20vh;
}
.button{
    top: 16vh;
}
}
@media screen and (max-width:850px) and (orientation:landscape){
.sabers{
    width: 30vh;
}
}
`
export default Sidebar