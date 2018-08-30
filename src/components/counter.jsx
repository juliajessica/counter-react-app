import React, { Component } from "react";

export default class Counter extends Component {
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There Are No Tags!</p>;
  //   //else
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("COUNTERS - RENDERED");
    //console.log("props", this.props.value);
    // return (
    //   <div>
    //     {this.state.tags.length === 0 && "Please Create a New Tag"}
    //     {/* //checks if the statement is a truthy && renders the last item in the conditional */}
    //     {this.renderTags()}
    //   </div>
    // );
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styles}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //console.log("value", value);
    return value === 0 ? "ZERO" : value;
  }

  styles = {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10
  };
}

//export default Counter;

// NOTES
// JSX doesnt allow you to use if and else conditionals thus, you have to use plain js
// remember you cant modify state directly
// when using an onClick you cna only pass it a function reference - ex - onClick={this.handleIncrement}
// if you need to pass an arguement within a method w/ onclick, add fat arrow to pass in the arguement like this
// onClick={() => this.handleIncrement(product)}

// if you dont use fat arrow for your methods you have to write your class method & bind 'this' from state using a constructor
// constructor() {
//   super();
//   //super - extend this from the object
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

// handleIncrement() {
//   //console.log("increment clicked", this);
//   this.setState({ count: this.state.count + 1 });
//   //setState - updates the state undirectly
// };
