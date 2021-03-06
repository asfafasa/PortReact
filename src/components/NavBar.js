import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById('navbar');
      if (isTop) {
        nav.classList.add('fixed-top');
        nav.classList.add('shadow');
      } else {
        nav.classList.remove('fixed-top');
        nav.classList.remove('shadow');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <Container>
        <Navbar
          expand='md'
          className='navbar navbar-expand-lg navbar-light mt-4 mb-0navbar navbar-expand-lg navbar-light mt-4 mb-0'>
          <NavbarBrand className='navbar-brand text-primary mx-auto' href='/'>
            <h3> EnDev </h3>
          </NavbarBrand>
        </Navbar>
        <Navbar
          className='navbar navbar-expand-lg mb-4 navbar-light bg-white'
          light
          expand='md'
          id='navbar'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='navbar-nav mx-auto font-weight-bolder' navbar>
              <NavItem>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem> Client Projects </DropdownItem>
                  <DropdownItem> Templates </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;
