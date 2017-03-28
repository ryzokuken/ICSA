import React, { Component } from 'react';
import { Grid, Jumbotron, Button, Row, Col, Panel, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import $ from 'jquery';

import data from './world-bank.png';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, showModal2: false, showModal3: false, data: {} };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  close2() {
    this.setState({ showModal2: false });
  }

  open2() {
    this.setState({ showModal2: true });
  }

  close3() {
    this.setState({ showModal3: false });
  }

  open3() {
    this.setState({ showModal3: true });
  }

  componentDidMount() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "headers": [
        "Access-Control-Allow-Origin": "*"
      ],
      "url": "http://localhost:5000/newsfeed",
      "method": "GET"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1 className="text-center" >Sahayak</h1>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row className="show-grid">

            <Col xs={6} md={3}>
              <Panel header={<h3>Your Pincode</h3>} bsStyle="success">
                <h3>110045</h3>
              </Panel>
              <Button
                bsStyle="success" block
                onClick={this.open2.bind(this)} >
                World Bank Statistics
              </Button>
            </Col>

            <Col xs={6} md={6}>
              { JSON.stringify(this.state.data) }
            </Col>

            <Col xsHidden md={3}>
              <Button
                bsStyle="success"
                onClick={this.open.bind(this)} block>
                Trade
              </Button>
              <Link to='/agriculture'>
                <Button
                  id="button-agri"
                  bsStyle="success" block>
                  Agriculture
                </Button>
              </Link>
              <Button
                bsStyle="success" block
                onClick={this.open3.bind(this)} >
                File an RTI
              </Button>
              <Button
                bsStyle="success" block>
                File a consumer complaint
              </Button>
            </Col>

          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Trading through Railway</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" placeholder="Source Station" />
            <input type="text" placeholder="Destination Station" />
            <Panel>
              Panel content
            </Panel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showModal2} onHide={this.close2.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>World Bank Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={data} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close2.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal 
          show={this.state.showModal3} 
          onHide={this.close3.bind(this)} 
          dialogClassName="modal-large">
          <Modal.Header closeButton>
            <Modal.Title>File an RTI</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe src="https://rtionline.gov.in/request/request.php" width="1000" height="500" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close3.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;