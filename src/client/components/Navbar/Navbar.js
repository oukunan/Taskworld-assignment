import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';
import { AuthConsumer } from '../../context/AuthContext';
const navbar = props => (
  <div className="navbar">
    <ul>
      <AuthConsumer>
        {({ isAuth, logout }) => (
          <div className="navbar-menu">
            {isAuth ? (
              <input type="text" placeholder="Search Fancy" id="search" />
            ) : null}
            <div className="logo">
              <NavbarItem link="/">FANCY</NavbarItem>
            </div>
            {isAuth ? (
              <div className="dropdown">
                <button className="dropbtn">
                  You <i id="arrow" className="down" />
                </button>
                <div className="dropdown-content">
                  <div onClick={logout}>Logout?</div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </AuthConsumer>
    </ul>
  </div>
);

export default navbar;
