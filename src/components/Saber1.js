import styled from "styled-components"

const Saber1 = () => {
    return (
      <Wrapper>
            <div className="saber1-container">
                <span className="s">S</span>
                    <div className="blade">
                        <span className="ss">=</span>
                        <span className="sss"></span>
                        <span className="ssss"></span>
                        <span className="sssss"></span>
                        <span className="ssssss"></span>
                    </div>
            </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
display: inline-block;
padding: 0;
.blade{
    position: absolute;
    left: 15vw;
    top: 1vh;
}
.s{
    display: block;
    margin-top:-9px;
    margin-left: 2vw;
    position: relative;
    background: white;
    font-size: x-large;
    
    width: 10vw;
    height: 4vh;
    text-align: center;
    padding-top: 15px;
    background: black;
    color: white;
    transform: 1s;
    border: 3px solid white;
    
    
}
.ss{
    position: absolute;
    left:.7in;
    width: 0in;
    height: 0px;
    margin-top: -3px;
    padding: 1px;
    background-color:gray;
    border-radius: 10%;
    border: 0px solid black;
    text-align: center;
    color:#f07008;
    opacity: 0;
}
.sss{
    position: absolute;
    left:1.2vw;
    width: .3vw;
    height: 3vh;
    margin-top: -.7vh;
    padding: 1px;
    background-color: #bf7002;
    opacity: 0;
}
.ssss{
    position: absolute;
    left:1.3vw;
    width: .3vw;
    height: 3vh;
    margin-top: -.7vh;
    padding: 1px;
    background-color: #bf7002;
    opacity: 0;
}
.sssss{
    position: absolute;
    left:10vw;
    width: 0vw;
    height: 1.7vh;
    padding: 1px;
    background: #01fb01;
    border-radius: 8px;
    box-shadow: 0 0 20px #01fb01;
    opacity: 0;
    transition: .5s;
}

.saber1-container{
    position: absolute;
    top: .2in;
    left: .3in;
    width: .01in;
    height: .1in;
    padding-bottom: 10px;
    transition: .5s;
    

}
.saber1-container:hover{
    position: absolute;
    width: 5in;
    .s{
        color: #01f901;
        text-shadow: 0 0 10px #01f901;
        box-shadow: 0 0 30px #01f901;
        transform: scale(1.5);
    }
    .ss{
        left:1vw;
        width: 7vw;
        height: .5vh;
        border: 10px solid black;
        outline: 2px solid white;
        color: silver;
        opacity: 1;
    }
    .sss{
        left:7.5vw;
        opacity: 1;
    }
    .ssss{
        left:8.5vw;
        opacity: 1;
    }
    .sssss{
        width: 40vw;
        height: 1.7vh;
        opacity: 1;
    }
}
`
export default Saber1