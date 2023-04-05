import React from 'react'
import styled from 'styled-components'
// import { IoMdPlanet } from 'react-icons/all';
import { IoMdPlanet } from "react-icons/io";



const Planet = ({name, diameter, climate, population, terrain}) => {
    return (
      <Wrapper>
      <div className='container'>
                <div className='content'><span>NAME : </span> <br className='br1'/>{name}</div>
                <div className='content'><span>DIAMETER : </span><br className='br1'/>{diameter}</div>
                <div className='content'><span>CLIMATE : </span><br className='br1'/>{climate}</div>
                <div className='content'><span>POPULATION : </span><br className='br1'/>{population}</div>
                <div className='content'><span>TERRAIN : </span><br className='br1'/>{terrain}</div>
                <div className='logo'><IoMdPlanet/></div>
           </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
top: 30vh;
margin-bottom: 8vh;
  .container{
    position: relative;
    
    height: 30vh;
    width: 30vh;    
    text-align: center;
    border-radius: 5%;
    border:3px solid white;
    transition: .5s;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    columns: 1;
  }
  span{
    color: #04fd04;
    font-size: 2vh;
    font-style: oblique;
  }
  .content{
    position: relative;
    color: white;
    height: 6vh;
    width: 14vh;
    margin: auto;
    top: 1vh;
    margin-bottom: -1vh;
  }
  .logo{
    transition: .5s;
    color:white;
    font-size: .0001vh;
    position: absolute;
    bottom: -10vh;
    margin: auto;
    left: 0;
    right: 0;
  }

  .container:hover{
    transform: scale(1.2) rotate(-20deg);
    opacity: 1;
    background-image: linear-gradient(to bottom, #0546f9, #01076f, black);
    .content{
      color: #04fd04;
      text-shadow:0 0 10px #fff;
    }
    .logo{
      display: block;
      font-size: 11vh;
      color: #04fd04;
    }
  }
  @media screen and (min-width:768px){
    left: 0;
    right: 0;
    bottom: 0;
    position: relative;
    height: 40vh;
  .container{
   
  }
  }
  @media screen and (max-width:850px) and (orientation: landscape){
    margin-bottom: 10vh;
    .br1{
      display: none;
    }
  .container{
    height: 38vh;
    width: 40vh;
    margin-bottom: 10vh;
    font-size: 3vh;
  }
  .content{
    width: 40vh;
    margin-bottom: 1vh;
  }
  }
`
export default Planet
