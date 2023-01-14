import React from 'react'
import styled from 'styled-components'
// import { IoMdPlanet } from 'react-icons/all';
import { IoMdPlanet } from "react-icons/io";



const Planet = ({name, diameter, climate, population, terrain}) => {
    return (
      <Wrapper>
        <div>
                <h1><span>PLANET :</span> {name}</h1>
                <h1><span>DIAMETER :</span> {diameter}</h1>
                <h1><span>CLIMATE :</span> {climate}</h1>
                <h1><span>POPULATION :</span> {population}</h1>
                <h1><span>TERRAIN :</span> {terrain}</h1>
                <p><IoMdPlanet/></p>
        </div>
      </Wrapper>
  )
}
const Wrapper = styled.div`

div{
    position: relative;
    background-color: black;
    opacity:.5;
    height: 30vh;
    width: 30vw;
    margin-top: 25vh;
    margin-left:32vw;
    
    text-align: center;
    border-radius: 5%;
    border:3px solid white;
    transition: .5s;
  }

  h1{
    height: 3.35vh;
    font-size: x-large;
    margin: auto;
    color: white;
    padding-top: .09in;
    overscroll-behavior: none;
  }
  p{
    transition: .5s;
    color:white;
    font-size: .001rem;
  }
  div:hover{
    transform: scale(1.2) rotate(-20deg);
    opacity: 1;
    span{
        color: #04fd04;
        text-shadow:0 0 10px #fff;
    }
    p{
        display: block;
        font-size: 10rem;
        color: #04fd04;
    }
  }
`
export default Planet
