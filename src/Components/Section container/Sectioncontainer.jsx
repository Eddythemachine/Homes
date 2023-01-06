// @ts-nocheck
import { Component } from "react/cjs/react.production.min";
import Section from "../Sections/Section";
// import "./sectioncontainer.scss";

class Sectioncontainer extends Component {
  render() {
    return (
      <div className="sectioncontainer">
        <Section
          title={"Azalea"}
          btnLeft={"Purchase"}
          btnRight={"more details"}
          backgroundImg={"./pics/family-2.jpg"}
        />
        <Section
          title={"Fresia"}
          btnLeft={"Purchase"}
          btnRight={"more details"}
          backgroundImg={"./pics/house.jpg"}
        />
        <Section
          title={"Gelsomino"}
          btnLeft={"Purchase"}
          btnRight={"more details"}
          backgroundImg={"./pics/glass.jpg"}
        />
        <Section
          title={"Gardenia "}
          btnLeft={"Purchase"}
          btnRight={"more details"}
          backgroundImg={"./pics/galla.jpg"}
        />
        <Section
          title={"Campanula"}
          btnLeft={"Purchase"}
          btnRight={"more details"}
          backgroundImg={"./pics/suite.jpg"}
        />
      </div>
    );
  }
}

export default Sectioncontainer;
