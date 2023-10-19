import styled from "styled-components";
import headshot from "./img/headshot.jpg";
import {Row} from "reactstrap";


function AboutMe() {
    return (
        <AboutMeWrapper>
            <AboutMeContainer>
                <MyNameNav>
                    <MyName>
                        <span>Hi <span className="wave">👋🏼</span>, I'm </span>
                        Jessica Rosier
                        <DynamicAboutMe className="about-me"></DynamicAboutMe>
                    </MyName>
                    <HeadshotWrapper>
                        <img src={headshot} alt="headshot"></img>
                    </HeadshotWrapper>
                </MyNameNav>
            </AboutMeContainer>
        </AboutMeWrapper>);
}


const HeadshotWrapper = styled.div`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    margin-top: -55px;
  }
`;

const DynamicAboutMe = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 30px;
  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MyName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: center;
  font-family: 'Shadows Into Light', sans-serif;
  font-size: 80px;
  width: 75%;
`;

const MyNameNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 75%;
  height: 100%;

  //@include media-breakpoint-up(xl) {
  //flex-direction: row;
  //}
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 20px;
  width: 100%;
  height: 100%;

  //@include media-breakpoint-up(xl) {
  //  flex-direction: column;
  //}
`;

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-transform: uppercase;
`;

export default AboutMe;



