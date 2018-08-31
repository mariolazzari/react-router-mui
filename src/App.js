import React, { Component } from "react";

class App extends Component {
  state = {
    writers: []
  };

  async componentDidMount() {
    /*
    fetch("http://localhost:3004/writers")
      .then(res => res.json())
      .then(writers => this.setState({ writers }))
      .catch(err => console.log(err));
      */
    try {
      const writers = await (await fetch(
        "http://localhost:3004/writers"
      )).json();
      this.setState({ writers });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
}

export default App;
