import { Bio } from "../constants/dataGen";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1c1e27;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #b1b2b3;
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 600;
  color: #f5f5dc;
  line-height: 68px;
  gap: 12px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  color: #114696;
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: #f5f5dc;
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: #f5f5dc;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(45deg, #114696, #072776);
  background: linear-gradient(45deg, #114696, #072776);
  background: -moz-linear-gradient(45deg, #114696, #072776);
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

function About() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Title>
                Bonjour, je suis
                <br />
                {Bio.name}{" "}
              </Title>
              <TextLoop>
                Je suis un
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              <ResumeButton href={Bio.resume} target="_blank">
                Cv en ligne
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer></HeroRightContainer>
          </HeroInnerContainer>
        </HeroBg>
      </HeroContainer>
    </div>
  );
}

export default About;
