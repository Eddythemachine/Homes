import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { Fragment } from "react/cjs/react.production.min";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [navState, setNavState] = useState(true);

  const openNav = () => {
    setNavState(false);
  };

  const closeNav = () => {
    setNavState(true);
  };

  return (
    <>
      <Container>
        <Logo>
          <img src="./pics/hl.png" alt="" />
        </Logo>
        <Navelements show={navState}>
          <Closeicon>
            <CloseIcon className={"icon"} fontSize="large" onClick={closeNav} />
          </Closeicon>
          <Link to="/" onClick={closeNav}>
            Home
          </Link>
          <Link to={"/villa"} onClick={closeNav}>
            Villa
          </Link>
          <Link to="/about">About</Link>
          <a href="./">Family</a>
          <a href="./">Contact</a>
        </Navelements>
        <div className="navicon">
          <MenuIcon fontSize="large" onClick={openNav} />
        </div>
      </Container>
      <Outlet />
    </>
  );
}

const Container = styled.div`
  /* background: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.div`
  img {
    width: 4rem;
    background: rgba(255, 255, 255, 0.3);
    border: none;
  }
`;

const Navelements = styled.div`
  a {
    color: #ff7700;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.6rem;
    /* margin-left: 0.3rem; */
    position: relative;
    font-family: "Staatliches", cursive;
    /* background: rgba(0, 0, 0, 0.2); */
    border-radius: 0.4rem;
    padding: 0.5rem 0.3rem;
    position: relative;
  }

  /* a:hover {
    opacity: 0.8;
  } */

  a::after {
    content: "";
    position: absolute;
    bottom: 0.4rem;
    left: 0.5rem;
    height: 0.3rem;
    background: #f09f58;
    opacity: 0.7;
    width: 0rem;
    transition: 0.3s linear;

    /* :hover {
      width: 1rem;
    } */
  }

  a:hover::after {
    width: 50%;
  }

  @media (max-width: 750px) {
    transition: 0.3s linear;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    position: fixed;
    top: 0;
    width: 50%;
    height: 100%;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99;
    transform: ${(props) => (props.show ? "translateX(100%)" : "translate(0)")};

    a {
      background: none;
      font-size: 2rem;
    }

    a::after {
      display: none;
    }
  }
`;

const Closeicon = styled.div`
  color: #f84242;
  display: none;

  @media (max-width: 750px) {
  display:block;
  position:absolute;
  top:1.3rem;
  left:1.3rem;
  cursor:pointer;
`;

export default Navbar;
