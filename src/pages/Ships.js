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
          <div className='div1'></div>
          <div>
            {ship.map((s) => {
              return <Ship key={s.id}{...s} />
             })}
          </div>
      </Wrapper>
    )
  }

const Wrapper = styled.div`

padding-bottom: 30vh;
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
export default Ships
