import React, { Component, Fragment } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Writers from "./Writers";

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
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
          <hr />

          <Route exact path="/" component="Home" />
          <Route path="/writers" component={Writers} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
