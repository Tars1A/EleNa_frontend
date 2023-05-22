import React, { Component } from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="Maximize" name="path" /> Maximize
        <input type="radio" value="Minimize" name="path" /> Minimize 
      </div>
    );
  }
}

export default Demo1;