import React, { Component, Fragment } from "react";
import isEmpty from "lodash.isempty";
import { currentLogin } from "../../Global/redux/actions/login";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";
import swal from "sweetalert";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("level")
    swal({
      title: "Berhasil",
      icon: "success",
      
    });
    
  };
  render() {
    const level = localStorage.getItem("token");
    return (
      <Navbar
        className="navbar shadow p-3 mb-5 bg-white rounded"
        color="light"
        light
        expand="md"
      >
        <div className="container">
          <NavbarBrand className="navbarBrand" href="/">
            <b>Game KuyMusik</b>{" "}
          </NavbarBrand>
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isEmpty(level) ? (
              <Fragment>
                <NavItem>
                  <NavLink href="/Sound">Sound</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/pattern">Pattern</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={() => this.logout()}>
                    Logout
                  </NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <Fragment />
            )}
            {isEmpty(level) ? (
              <Fragment>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Fragment>
            ) : (
              <Fragment />
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
