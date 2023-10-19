import styled from "styled-components";
function Heading(props) {
    return (<StyledHeading>{props.text}</StyledHeading>)
}

const StyledHeading = styled.h1`
color:red;
  &:hover {
    color:blue;
  }
`

export default Heading;