import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };
  constructor() {
    super();
    console.log("APP - CONSTRUCTOR");
  } //this runs 1st, then render(), then componentDidMount()

  // componentDidMount() {
  //   console.log("APP - MOUNTED");
  // } //this is 3rd after the component run the render() its mounted on the DOM

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    //console.log("event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
