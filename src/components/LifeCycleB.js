import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Temiyores",
    };
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("LifeCycleB render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
