import React from 'react';
import styled from 'styled-components';
import noop from 'lodash/noop';
import {
  BaseTwoLogo,
  Button,
  CallToAction,
  Icon,
  Link,
  UL,
  LI,
} from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const NavBar = styled.nav`
  background-color: ${themed('color.overlay')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;
  position: absolute;
  width: 100%;
  z-index: 1;

  &.menu-open {
    background-color: ${themed('color.background')};
    height: 100vh;
    transition: height 300ms ease-in;
  }

  &.menu-closed {
    background-color: ${themed('color.overlay')};
    height: 48px;
    transition: height 300ms linear 100ms;
  }

  ${mediaQuery.small`
    background-color: ${themed('color.overlay')};
    height: 50px;
    padding: 0 20px;
  `};
`;

const NavList = styled(UL)`
  height: 0;
  list-style-type: none;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;

  .menu-open & {
    border-top: 1px solid ${themed('color.purple')};
    height: auto;
    opacity: 1;
    transition: opacity 300ms ease-in 200ms;
  }

  .menu-closed & {
    border-top: 1px solid ${themed('color.purple')};
    height: 0;
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  ${mediaQuery.small`
    .menu-closed & {
    align-items: center;
    display: flex;
    height: auto;
    opacity: 1;
    padding: 0;
    width: auto;
    }
  `};
`;

const NavItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.purple')};
  font-size: 1.5em;
  padding: 10px 0;

  ${mediaQuery.small`
    border: none;
  `};
`;

const NavLink = styled(Link)`
  color: ${themed('color.spaceBlue')};
  font-weight: 400;
  text-decoration: none;
  padding-left: 30px;
  width: 100%;

  ${mediaQuery.small`
    color: ${themed('color.menu')};
  `};
`;

const MainNavigationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoToggleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 48px;
  justify-content: space-between;
  padding: 0 10px;

  ${mediaQuery.small`
    font-size: 1.25rem;
    padding: 0;
  `};
`;

const MenuToggle = styled(Button)`
  background-image: none;
  border: none;
  box-shadow: none;
  color: ${themed('color.menu')};
  margin: 0 10px;
  padding: 0;

  &:active {
    background-color: transparent;
  }

  &:focus,
  &:hover {
    color: ${themed('color.menu')};
  }

  ${mediaQuery.small`
    display: none;
  `};
`;

const ContactCallToActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ContactCallToAction = styled(CallToAction)`
  height: 0;
  font-size: 18px;
  line-height: 48px;
  margin: 0;
  opacity: 0;
  padding: 0;
  text-align: center;
  width: 160px;

  .menu-open & {
    height: 48px;
    margin: 10px 10px;
    opacity: 1;
    transition: opacity 1000ms ease-in, height 800ms ease-in;
  }

  .menu-closed & {
    height: 0;
    margin: 0;
    opacity: 0;
    transition: opacity 500ms ease-out, height 300ms ease-out;
  }
`;

class GlobalNavigation extends React.Component {
  static defaultProps = {
    onClick: noop,
  };

  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <NavBar className={this.state.isOpen ? 'menu-open' : 'menu-closed'}>
        <MainNavigationContainer>
          <LogoToggleContainer>
            <BaseTwoLogo />
            <MenuToggle onClick={this.handleClick}>
              <Icon name="menutoggle" />
            </MenuToggle>
          </LogoToggleContainer>
          <NavList>
            <NavItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact-us">Contact</NavLink>
            </NavItem>
          </NavList>
        </MainNavigationContainer>
        <ContactCallToActionContainer>
          <ContactCallToAction
            href="tel:16143981158"
            className="contact-call--left"
          >
            614.398.1158
          </ContactCallToAction>
          <ContactCallToAction
            href="tel:16143981158"
            className="contact-call--right"
          >
            Email Us
          </ContactCallToAction>
        </ContactCallToActionContainer>
      </NavBar>
    );
  }
}

export default GlobalNavigation;
