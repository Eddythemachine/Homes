// @ts-nocheck
import { Component } from "react";
import styled from "styled-components";
// import Bounce from "@successtar/react-reveal/Bounce";
import { Fade, Rotate, Bounce } from "react-awesome-reveal";

class Section extends Component {
  render() {
    const { title, btnLeft, btnRight, backgroundImg } = this.props;
    return (
      <Container bgImg={backgroundImg}>
        <Fade>
          <Rotate>
            <Title>{title}</Title>
          </Rotate>
          <ButtonGroup>
            <Bounce>
              <ButtonLeft>{btnLeft}</ButtonLeft>
            </Bounce>
            <Bounce>
              <ButtonRight>{btnRight}</ButtonRight>
            </Bounce>
          </ButtonGroup>
        </Fade>
      </Container>
    );
  }
}

export default Section;

const Container = styled.div`
  padding: 5rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(props) => `url("${props.bgImg}")`} center center/cover;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  /* margin-bottom: 10vh; */
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0rem;
  margin-bottom: 10vh;
`;
const ButtonRight = styled.div`
  color: #ff7700;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 0.1rem white;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  transition: 0.1s linear;
  border: solid #ffd5af 0.1rem;
  :hover {
    transform: translateY(-0.1rem);
    opacity: 0.9;
  }
`;
const ButtonLeft = styled(ButtonRight)``;
const Title = styled.div`
  margin-top: 14vh;
  text-align: center;
  font-size: 4rem;
  color: #ff7700;
  text-transform: uppercase;
  font-weight: 900;
  /* margin: auto; */
  text-shadow: 0.4rem 0.4rem 0.5rem black;
  font-family: "Alfa Slab One", cursive;
`;
