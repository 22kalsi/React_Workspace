import React,{Component} from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "Hi"
    };
  }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() =>this.setState({ count: this.state = "Hello" })}>
          Click me
        </button>
      </div>
    );
  }
}