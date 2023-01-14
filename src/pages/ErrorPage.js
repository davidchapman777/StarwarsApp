import styled from "styled-components"
import ErrorImg from '../Images/error-image.jpeg'


const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <img src={ErrorImg}/>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

img{
  margin-top: 1in;
  height: 100vh;
  width: 100vw;
  
}

`
export default ErrorPage