import React, { Component } from 'react';
import { Grid, Navbar, Button, FormGroup, FormControl, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const styles = {
  marginTop: '80px'
};

class Container extends Component {
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
                  <MenuItem eventKey={1.1}>Hindi</MenuItem>
                  <MenuItem eventKey={1.2}>Bengali</MenuItem>
                  <MenuItem eventKey={1.3}>Gujarati</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={1.4}>English</MenuItem>
                </NavDropdown>
              </Nav>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" />
                </FormGroup>
                {' '}
                <Button type="submit">Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        { this.props.children }
      </div>
    );
  }
}

export default Container;