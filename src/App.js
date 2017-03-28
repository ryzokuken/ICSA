import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app-root">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Sahayak</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1 className="text-center">Sahayak</h1>
            <p id="buttons">
              <Button
                bsStyle="primary"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                File an RTI
              </Button>
              <Button
                bsStyle="primary"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                Register an FIR
              </Button>
              <Button
                bsStyle="primary"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                Register a Consumer Complaint
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;