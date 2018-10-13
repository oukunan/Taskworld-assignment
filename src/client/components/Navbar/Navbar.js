import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';

const navbar = props => (
  <div className="navbar">
    <ul>
      <NavbarItem link="/logout">You Logout?</NavbarItem>
    </ul>
  </div>
);

export default navbar;
