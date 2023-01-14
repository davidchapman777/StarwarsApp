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
      {planets.map((item) => {
        return <Planet key={item} {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`

background-image: url(${Pic});
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
overflow: hidden;
margin-left: 1in;
margin-top: 1in;

`

export default Planets
