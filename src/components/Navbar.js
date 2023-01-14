import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pic from '../Images/navbarlogo.svg'
const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <img src={Pic}/>
      <Link to='/'>Characters</Link>
      <Link to='/ships'>Ships</Link>
      <Link to='/planets'>Planets</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
top: 0;
width: 100%;
/* height: 18vh; */
bottom: 78vh;
background: #f07008;
border: .2rem solid black;
position: sticky;
position: fixed;
z-index: 1;


padding-bottom: 1.8rem;
div{
  text-align: center;
  align-content: center;
  margin-left: 10vw;
}

img{
position: absolute;
margin-left: -19%;
margin-top: -8.5vh;
width: 20vw;
height:40vh ;

}
Link{
  display: inline-block;
  position: relative;
  text-decoration:none;
  color: white;
  text-transform:uppercase;
  border: .2rem solid white;
  background-color: black;
  padding:1rem;
  transition: .2s;
  margin-left:10%;
  top: 7vh;
  width: 12vw;
  height: 3vh;
}
a:hover{
  transform: scale(1.5);
  box-shadow: 6px 6px black;
}
/* @media screen and (min-width: 500px){
  a{
    margin-top: 10%;
  }
}
@media screen and (min-width: 700px){
  a{
    margin-top: 10%;
  }
}
@media screen and (min-width: 900px){
  a{
    margin-top: 7%;
  }
}
@media screen and (min-width: 1100px){
  a{
    margin-top: 7%;
  }
}
@media screen and (min-width: 1300px){
  a{
    margin-top: 4%;
  }
} */


`
export default Navbar
