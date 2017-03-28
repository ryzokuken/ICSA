import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import './style.css';

class App extends Component {
  render() {
    return (
      <Grid>
         <Row className="show-grid">
          <Col md={6}>
            <Panel header={<h3>Weather Information</h3>} bsStyle="primary">
              Panel content
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header={<h3>Livestock</h3>} bsStyle="primary">
              Panel content
            </Panel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Panel header={<h3>Hospital Directory</h3>} bsStyle="primary">
              Panel content
            </Panel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <Panel header={<h3>Food Rates</h3>} bsStyle="primary">
              Panel content
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header={<h3>Land Rates</h3>} bsStyle="primary">
              Panel content
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;