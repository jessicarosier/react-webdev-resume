import styled from "styled-components";

function Button(props) {
    return (<StyledButton>{props.text}</StyledButton>)
}

const StyledButton = styled.button`
background-color: blueviolet;
  color: white;
  border-radius: 5px;
  width: 300px;
`;

export default Button;
