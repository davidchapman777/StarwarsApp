import React from 'react'
import styled from 'styled-components'
import Planet from '../components/Planet'
import Pic from '../Images/planets.jpeg'
import { usePlanetsContext } from '../context/planetsContext'
import Loading from '../components/Loading'


const Planets = () => {
  const { planets, isLoading } = usePlanetsContext()
  if (isLoading) {
    return (
      <div>
        <Loading/>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='div1'></div>
      <div>
      {planets.map((item) => {
        return <Planet key={item} {...item} />
      })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-bottom:30vh;
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

export default Planets
