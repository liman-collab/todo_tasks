import React, { Component } from "react";
import "./features.styles.css";
import FeatureItem from "./feature-item/feature-item";
class Features extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: data,
    // };
  }

  render() {
    return (
      <div>
        <div className="features">
          <h2>FEATURES</h2>
        </div>
        <div className="item">
          <FeatureItem />
        </div>
      </div>
    );
  }
}

export default Features;
