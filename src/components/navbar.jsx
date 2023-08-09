import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import Logo from '/src/logo/77628.png'
import './navbar.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  const activeStyle = { color: 'red' };
  return (
    <>
      <Router>
      <Nav>
        <a href = "www.tridentd3d.com">
          <img id="logo" src={Logo}/>
        </a>
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
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
          </Routes>
      </Router>
    </>
  );
};
  
export default Navbar;
