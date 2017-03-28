import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { getLivestock } from '../../../api/livestock';
import { getWeather } from '../../../api/weather';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { livestock: {}, weather: {} }
  }

  componentWillMount() {
    const setLivestock = (data) => {
      this.setState({ livestock: data });
    };
    getLivestock(setLivestock.bind(this));

    navigator.geolocation.getCurrentPosition((position) => {
      const setWeather = (data) => {
        this.setState({ weather: data });
      };
      getWeather(setWeather.bind(this), position.coords.latitude, position.coords.longitude);
    })
  }

  render() {
    return (
      <Grid>
         <Row className="show-grid">
          <Col md={6}>
<<<<<<< HEAD
            <Panel header={<h3>Weather Information</h3>} bsStyle="success">
              Panel content
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header={<h3>Livestock</h3>} bsStyle="success">
              Panel content
=======
            <Panel header={<h3>Weather Information</h3>} bsStyle="primary">
              {this.state.weather.weather && this.state.weather.weather.map((w) => (
                <div>
                <img src={`http://openweathermap.org/img/w/${w.icon}.png`} />
                <h3>{w.main}</h3>
                </div>
              ))}
              {this.state.weather.main && <div>
                <strong>Temperature:</strong> {this.state.weather.main.temp} &deg;F<br />
                <strong>Pressure:</strong> {this.state.weather.main.pressure}<br />
                <strong>Humidity:</strong> {this.state.weather.main.humidity}
              </div>}
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header={<h3>Livestock</h3>} bsStyle="primary">
              <table className="table table-striped table-bordered table-hover table-condensed">
              <thead>
                <tr>
                    <th>Districts</th>
                    <th>Landrays</th>
                    <th>Yorkshire</th>
                    <th>Hampshire</th>
                    <th>TotalExoticPigs</th>
                  </tr>
              </thead>
              <tbody>
                {this.state.livestock.records && this.state.livestock.records.map((item) => (
                  <tr>
                    <td>{item["Districts"]}</td>
                    <td>{item["ExoticBreedLandrays"]}</td>
                    <td>{item["ExoticBreedYorkshire"]}</td>
                    <td>{item["ExoticBreedHampshire"]}</td>
                    <td>{item["ExoticBreedTotalExoticPigs"]}</td>
                  </tr>
                ))}
              </tbody>
              </table>
>>>>>>> Ujjwal
            </Panel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Panel header={<h3>Hospital Directory</h3>} bsStyle="success">
              Panel content
            </Panel>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <Panel header={<h3>Food Rates</h3>} bsStyle="success">
              Panel content
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header={<h3>Land Rates</h3>} bsStyle="success">
              Panel content
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;