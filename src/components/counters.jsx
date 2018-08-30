import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10
  };

  render() {
    console.log("COUNTER - RENDERED");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm"
          style={this.styles}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //you can oas the entire single counter value that contains these properties 1. value={counter.value} 2. id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
