import styled from "styled-components";
import Button from "../Button";
function Card(props) {
    return (
        <CardWrapper>
            <CardHeading>{props.text}</CardHeading>
            <CardDetails>{props.details}</CardDetails>
            <Button text = {props.button}></Button>
        </CardWrapper>
    )
}


const CardDetails = styled.p`
text-transform: uppercase;
`

const CardHeading = styled.h1`
  color: blue;
  font-size: 30px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 300px;
  height: 500px;
  background-color: aqua;
  border-radius: 10px;
`

export default Card;



