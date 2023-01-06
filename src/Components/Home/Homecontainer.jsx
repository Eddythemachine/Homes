import React from "react";
import Home from "../Homepage/Home.jsx";
import Companydetails from "../companydetails/Companydetails.jsx";
import styled from "styled-components";

function Homecontainer() {
  return (
    <Wrapper>
      <Home />
      <Companydetails />
    </Wrapper>
  );
}

export default Homecontainer;

const Wrapper = styled.div`
  overflow-x: hidden;
  /* background: rgba(255, 0, 200, 0.1); */
`;
