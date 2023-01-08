import { Component } from "react";
import "./companydetails.scss";
import Companydetailsinfo from "./Companydetailsinfo.jsx";
import { Slide } from "react-awesome-reveal";
import companyData from "./companydetails.json";

const data = companyData;

class Companydetails extends Component {
  render() {
    return (
      <div className="companydetails">
        <h3>affordable housing at your finger tips</h3>
        <div className="about-company">
          {data.map((dat, i) => {
            return (
              <Slide direction="bottom">
                <Companydetailsinfo
                  pics={dat.pics}
                  subHeading={dat.subHeading}
                  text={dat.text}
                />
              </Slide>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Companydetails;
