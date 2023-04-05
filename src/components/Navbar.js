import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pic from '../Images/navbarlogo.svg'





const Navbar = () => {
  return (
    <Wrapper>
      <div className='div1'>
        <img src={Pic} />
        <div className='div2'>
          <div className='div3'>
      <Link to='/' className='link'>Characters</Link>
          </div>
          <div className='div3'>
      <Link to='/ships' className='link'>Ships</Link>
          </div>
          <div className='div3'>
      <Link to='/planets' className='link'>Planets</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: auto;
left: 0;
right: 0;
top: 0;
height: 20vh;
background-image:linear-gradient(to right, #03f703,#fc7404, black) ;
border: .2rem solid black;
position: fixed;
z-index: 1;

.div1{
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
.div2{
  display: block;
  height: 10vh;
  position: absolute;
  left: 50%;
  top: 1vh;
}
  .div3{
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 1vh;
    width: 20vh;
  }
  .link{
    text-decoration: none;
    color: white;
    position: relative;
    text-decoration:none;
    color: white;
    text-transform:uppercase;
    border: .1vh solid white;
    background-color: black;
    transition: .2s;
    top: 0;
    width: 20vh;
    height: 3vh;
    text-align: center;
    border-radius: 10px;
    padding: 1vh;
    display: block;
  }

img{
position: absolute;
width: 20vh;
height:20vh ;
top: 0vh;
left: 2vh;
}

a:hover{
  
  box-shadow: 6px 6px black;
}
@media screen and (min-width:768px){
  height: 15vh;
  .div2{
    display:flex;
    width: 70%;
    left: 22.5vh;
    column-gap: 2vh;
  }
  .link{
    width: 15vh;
  }
  img{
    top: -3vh;
  }
}
@media screen and (max-width:850px) and (orientation:landscape){
  .link{
    width: 30vh;
    padding-bottom:3vh;
  }
  img{
    height: 25vh;
    width: 25vh;
    top: -5vh;
  }
}
@media screen and (min-width:992px){
  .div2{
  }
  .div3:hover{
    transform: scale(1.1);
  }

}
@media screen and (min-width:992px){
  .div3:hover{
    transform: scale(1.1);
  }
  
}

`
export default Navbar
