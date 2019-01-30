import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => (
  <Navbar inverse>
    <Nav pullLeft>
      <LinkContainer to="/">
        <NavItem>Perpetual Pulse Palace</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/MetronomeCalc">
        <NavItem eventKey={1}>iTap</NavItem>
      </LinkContainer>
      <LinkContainer to="/DrumSynth">
        <NavItem eventKey={2}>DrumSynth</NavItem>
      </LinkContainer>
      {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown> */}
    </Nav>
  </Navbar>
)

export default NavBar
