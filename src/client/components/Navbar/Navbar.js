import React from 'react';
import Input from '../UI/Input/Input';

import NavbarSection from './NavbarSection/NavbarSection';
const navbar = ({ isAuth, logout }) => (
  <div className="navbar">
    <ul>
      <div className="navbar-menu">
        {isAuth ? (
          <NavbarSection>
            <Input inputType="text" name="search" placeholder="Search Fancy" />
          </NavbarSection>
        ) : null}
        <NavbarSection>
          <div className="logo">FANCY</div>
        </NavbarSection>

        {isAuth ? (
          <NavbarSection>
            <div className="dropdown">
              <button className="dropbtn">
                You <i id="arrow" className="down" />
              </button>
              <div className="dropdown-content">
                <div onClick={logout}>Logout?</div>
              </div>
            </div>
          </NavbarSection>
        ) : null}
      </div>
    </ul>
  </div>
);

export default navbar;
