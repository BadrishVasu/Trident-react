import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  const activeStyle = { color: 'blue' };
  return (
    <>
      <Router>
      <Nav>

        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle={activeStyle}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle={activeStyle}>
            About
          </NavLink>
          {/* <NavLink to='/production' activeStyle={activeStyle}>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle={activeStyle}>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle={activeStyle}>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle={activeStyle}>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle={activeStyle}>
            Sign Up
          </NavLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>

      
          <Routes>
            <Route path='/' component={Home} />
            <Route path='/about' component={Home} />
          </Routes>
      </Router>
    </>
  );
};
  
export default Navbar;
