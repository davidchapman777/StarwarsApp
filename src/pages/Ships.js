import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Ship from '../components/Ship'
import Pic from '../Images/ships-img.jpeg'
import { useShipsContext } from '../context/shipsContext'
import Loading from '../components/Loading'

const Ships = () => {
  const {ship, isLoading}=useShipsContext()
  if (isLoading) {
    return (
      <div>
        <Loading/>
    </div>
  )
}
  return (
      <Wrapper>
          <div>
            {ship.map((s) => {
              return <Ship key={s.id}{...s} />
             })}
          </div>
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
export default Ships
