import React, { Component } from 'react';
import { Grid, Navbar, Button, FormGroup, FormControl, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

import { wikiService } from '../api/wiki';

const styles = {
  marginTop: '80px'
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'en', wiki: {}, query: ''};
  }

  setHindi() {
    this.setState({lang: 'hi'});
  }

  setGujarati() {
    this.setState({lang: 'gu'});
  }

  setKannada() {
    this.setState({lang: 'kn'});
  }

  setBengali() {
    this.setState({lang: 'bn'});
  }

  setEnglish() {
    this.setState({lang: 'en'})
  }

  setWiki() {
    const cb = (data) => {
      this.setState({ wiki: data });
    }
    wikiService(cb, this.state.query);
  }

  setQuery(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div style={styles}>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Sahayak</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={1} title="Languages" id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1} onClick={this.setHindi.bind(this)}>Hindi</MenuItem>
                  <MenuItem eventKey={1.2} onClick={this.setBengali.bind(this)}>Bengali</MenuItem>
                  <MenuItem eventKey={1.3} onClick={this.setGujarati.bind(this)}>Gujarati</MenuItem>
                  <MenuItem eventKey={1.4} onClick={this.setKannada.bind(this)}>Kannada</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={1.5} onClick={this.setEnglish.bind(this)}>English</MenuItem>
                </NavDropdown>
                <NavItem>Current Lanuage: {this.state.lang}</NavItem>
              </Nav>
              <Navbar.Form pullRight onSubmit={this.setWiki}>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" value={this.state.query} onChange={this.setQuery.bind(this)}/>
                </FormGroup>
                <Button type="submit" onClick={this.setWiki.bind(this)}>Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        { JSON.stringify(this.state.wiki) }
        { this.props.children }
      </div>
    );
  }
}

export default Container;