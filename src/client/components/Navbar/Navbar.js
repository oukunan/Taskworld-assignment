import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';
import NavbarSection from './NavbarSection/NavbarSection';
import { AuthConsumer } from '../../context/AuthContext';
const navbar = props => (
  <div className="navbar">
    <ul>
      <AuthConsumer>
        {({ isAuth, logout }) => (
          <div className="navbar-menu">
            {isAuth ? (
              <NavbarSection>
                <input type="text" placeholder="Search Fancy" id="search" />
              </NavbarSection>
            ) : null}
            <NavbarSection>
              <div className="logo">
                FANCY
              </div>
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
        )}
      </AuthConsumer>
    </ul>
  </div>
);

export default navbar;
