import React, { Component } from "react";
import PropTypes from "prop-types";

class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      name5: "",
      name6: "",
    };
  }

  // componentWillMount() {

  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name1: "Mrs. Rekha",
        name2: "Mr. Suraj Goyal",
        name3: "Parth",
        name4: "Anushka",
        name5: "Mr. ",
        name6: "Mrs. Arjun Kumar",
      });
    }, 2000);
  }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <>
        <div
          className="container mt-5 text-center"
          style={{ fontFamily: "cursive" }}
        >
          <p>
            <strong>{this.state.name1}</strong> and{" "}
            <strong>{this.state.name2}</strong>
            <br />
            request your gracious presence <br />
            on the wedding ceremony of their son
          </p>
          <h1>{this.state.name3}</h1>
          <p>WITh</p>
          <h1>{this.state.name4}</h1>
          <p>
            daughter of <strong>{this.state.name5}</strong>and{" "}
            <strong>{this.state.name6}</strong>
          </p>
          <p>
            SATURDAY, SEPTEMBER 16<sup>TH</sup>, 2025 <br />
            7 O'CLOCK IN THE EVENING <br />
            MAJESTIC BALLROOM <br />
            1153 DARK STAR LANE <br />
            SAN DIEGO. CA
          </p>
        </div>
      </>
    );
  }
}

// Invitation.propTypes = {

// };

export default Invitation;
