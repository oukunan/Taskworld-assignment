import React from 'react';
import Input from '../UI/Input/Input';

import NavbarSection from './NavbarSection/NavbarSection';
const navbar = props => (
  <div className="navbar">
    <ul>
      <div className="navbar-menu">
        {props.isAuth ? (
          <NavbarSection>
            <Input inputType="text" name="search" placeholder="Search Fancy" />
          </NavbarSection>
        ) : null}
        <NavbarSection>
          <div className="logo">FANCY</div>
        </NavbarSection>

        {props.isAuth ? (
          <NavbarSection>
            <div className="dropdown">
              <button className="dropbtn">
                You <i id="arrow" className="down" />
              </button>
              <div className="dropdown-content">
                <div onClick={props.logout}>Logout?</div>
              </div>
            </div>
          </NavbarSection>
        ) : null}
      </div>
    </ul>
  </div>
);

export default navbar;
