import styled from "styled-components"

const Saber5 = () => {
    return (
      <Wrapper>
            <div className="saber1-container">
                <span className="s">W</span>
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
top: -12vh;
.blade{
    position: absolute;
    left: 13vh;
    top: 1vh;
}
.s{
    display: block;
    top: -.5vh;
    left: 1.5vh;
    position: relative;
    background: white;
    font-size: x-large;
    
    width: 6vh;
    height: 4vh;
    text-align: center;
    padding-top: 15px;
    background: black;
    color: white;
    transform: 1s;
    border: .1px solid white;
    border-radius: 10px;
       
    
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
    left:1.2vh;
    width: .2vh;
    height: 3vh;
    margin-top: -.7vh;
    padding: 1px;
    background-color: #bf7002;
    opacity: 0;

       
}
.ssss{
    position: absolute;
    left:1.3vh;
    width: .2vh;
    height: 3vh;
    margin-top: -.7vh;
    padding: 1px;
    background-color: #bf7002;
    opacity: 0;

        
}
.sssss{
    position: absolute;
    left:7vh;
    height: 1.7vh;
    padding: 1px;
    background: #fd0303;
    border-radius: 8px;
    box-shadow: 0 0 20px #fd0303;
    opacity: 0;
    transition: .5s;
    width: 0vh;
       
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
        color: #fd0303;
        text-shadow: 0 0 10px #fd0303;
        box-shadow: 0 0 30px #fd0303;
        transform: scale(1.3);
    }
    .ss{
        left:0vh;
        width: 5vh;
        height: .5vh;
        border: 10px solid black;
        outline: 2px solid white;
        color: silver;
        opacity: 1;
    }
    .sss{
        left:4.8vh;
        opacity: 1;
    }
    .ssss{
       left:5.5vh;
        opacity: 1;
    }
    .sssss{
        width: 30vh;
        height: 1.7vh;
        opacity: 1;
    }
}
@media screen and (min-width:768px){
    .blade{
    left: 18vh;
}
.s{
    left: 4vh;
}
}
`
export default Saber5