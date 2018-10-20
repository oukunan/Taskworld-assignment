import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarItem = ({ link, logout, children }) => (
  <li>
    <NavLink to={link} onClick={logout}>
      {children}
    </NavLink>
  </li>
);

export default navbarItem;
