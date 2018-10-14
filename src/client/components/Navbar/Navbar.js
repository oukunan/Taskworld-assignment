import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';
import { AuthConsumer } from '../../context/AuthContext';
const navbar = props => (
  <div className="navbar">
    <ul>
      <AuthConsumer>
        {({ isAuth, logout }) => (
          <div>
            <NavbarItem link="/">HOME</NavbarItem>
            {isAuth ? <button onClick={logout} >You Logout?</button> : null}
          </div>
        )}
      </AuthConsumer>
    </ul>
  </div>
);

export default navbar;
