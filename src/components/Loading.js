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
    margin-top: 40vh;
    margin-left: 20.8vw;
    width: 79%;
    
}

img{
    display: flex;
    
    position: relative;
    width: 40vw;
    height: 40vh;
    margin: auto;
    
}
h1{
    border-radius: 100px;
    border:.1vw solid black;
    color: black;
    position: relative;
    margin: auto;
    padding: 2vw;
    box-shadow: 0 0 5vw #3ffd00;
    text-align: center;
    width: 15vw;
    
}
`

export default Loading