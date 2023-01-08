import { Component } from "react";

class Companydetailsinfo extends Component {
  render() {
    const { pics, subHeading, text } = this.props;
    return (
      <div>
        <div className="about-company__card">
          <div className="card_pic">
            <img src={`${pics}`} alt="" />
          </div>
          <div className="card_write">
            <h4>{subHeading}</h4>
            <p>{text}</p>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Companydetailsinfo;
