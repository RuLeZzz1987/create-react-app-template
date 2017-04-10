import React, { Component } from "react";
import VRWorld from "../three/world";
import * as THREE from "three";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    VRWorld(window, THREE, !!this.props.isCardboard);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div className="loadingPageWrap" id="loader">
          <div className="loadingContentWrap">
            <h2 className="loadingTitle">Loading</h2>
            <div className="loaderWrap">
              <div id="inner-loader" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
