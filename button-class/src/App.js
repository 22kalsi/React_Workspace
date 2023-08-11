import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hi"
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h1> {this.state.text} </h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({text: this.state.text = "Hello"} )}>
          Click me
        </button>
      </div>
    );
  }
}