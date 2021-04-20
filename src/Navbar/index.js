import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../src/logo.png";

const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 96px;
`;

const LeftItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

const Button = styled.button`
border:none;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  color:white;
  background: #793DE4;
  border-radius: 4px;
  font-family: Geograph;
  font-weight: 600;
  font-size: 16px;
  line-height:20px;
  margin-top:8px;
  margin-left: 48px;
`;

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarFlex>
          <img src={logo} alt="Logo" width="143" height="39"/>
          <LeftItems>
          <NavbarList>{children}</NavbarList>
          <Button>Speak to sales</Button>
          </LeftItems>
        </NavbarFlex>
      </NavbarEl>
    );
  }
}

export default Navbar;
