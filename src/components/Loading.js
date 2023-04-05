import styled from "styled-components"
import Pic from '../Images/loading.jpeg'

const Loading = () => {
    return (
      <Wrapper>    
            <div>
                <img src={Pic} />
                <h1>Loading...</h1>
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
div{
   margin: auto;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   position: fixed;
}
img{
    position:absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
h1{
    border-radius: 100px;
    border:.1vw solid black;
    color: black;
    position: relative;
    margin: auto;
    width: 140px;
    left: 0;
    right: 0;
    padding: 5px;
    box-shadow: 0 0 5vw #3ffd00;
    text-align: center;
    top: 65%;

}
@media screen and (max-width:850px) and (orientation:landscape){
    h1{
        top: 83%;
    }
}
`

export default Loading