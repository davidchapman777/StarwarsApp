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
    
    return (
        <Wrapper>
            <Saber1 />
            <Saber2 />
            <Saber3 />
            <Saber4 />
            <Saber5 />
            <Saber6 />
            <Saber7 />
            <Saber8 />
            
        </Wrapper>
  )
}

const Wrapper = styled.div`
top:23vh;
border: 4px solid black;
position: relative;
position: fixed;
height: 100%;
width: 20vw;
margin-top:-1vh;
background-color: #f07008;
display: grid;
z-index: 1;
/* @media screen and (min-width: 500px){
    width: 25%;
}
@media screen and (min-width: 700px){
    width: 19%;
}
@media screen and (min-width: 900px){
    width: 15%;
}
@media screen and (min-width: 1100px){
    width: 12%;
}
@media screen and (min-width: 1300px){
    width: 10%;
} */

`
export default Sidebar