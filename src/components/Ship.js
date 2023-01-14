import React from 'react'
import styled from 'styled-components'
import { GiSpaceship } from 'react-icons/gi';


const Ship = ({id, model, starship_class, passengers}) => {
  return (
    <Wrapper>
      <div className='container'>
        <h1></h1>
      <h1><span>MODEL : </span>{model}</h1>
      <h1><span>CLASS : </span>{starship_class}</h1>
      <h1><span>MAX-CAPACITY : </span>{passengers}</h1>
      <p><GiSpaceship/></p>  
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
        color:#04fd04;
        margin-top: 4vh;
    }
  }
`
export default Ship
