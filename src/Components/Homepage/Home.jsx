import { Component } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import React from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      bgImg: "./pics/homepage-1.jpg",
      count: 1,
    };
  }

  i = 3;
  updateCount = () => {
    if (this.i > 4) this.i = 1;
    const count = this.i++;
    this.setState(() => {
      return { count };
    });
  };

  changeHomePagePic = () => {
    this.updateCount();
    const bgImg = `./pics/homepage-${this.state.count}.jpg`;
    console.log(this.state.bgImg);
    this.setState(() => {
      return { bgImg };
    });
  };

  render() {
    const { bgImg } = this.state;

    return (
      <Wrapper bgImg={bgImg}>
        <h1>
          <Slide>Homes</Slide>
          <Slide direction="right">
            <span>More Than A House</span>
          </Slide>
        </h1>
      </Wrapper>
    );
  }
}

export default Home;
const Wrapper = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(props) => `url("${props.bgImg}")`} center center / cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 6rem;
    text-transform: uppercase;
    display: block;
    color: #ec7f1f;
    text-align: center;
    font-family: "Alfa Slab One", cursive;
    margin-bottom: 0;
    line-height: 4rem;
    span {
      display: block;
      font-size: 3rem;
      opacity: 0.8;
      margin-top: 0;
      font-family: "Staatliches", cursive;
      color: #ff973b;
      text-shadow: 0.1rem 0.31rem 0.1rem rgba(0, 0, 0, 1);
    }

    @media (max-width: 750px) {
    }
  }
`;
