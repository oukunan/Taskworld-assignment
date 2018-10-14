import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarItem = props => (
  <li>
    <NavLink to={props.link} onClick={props.logout}>
      {props.children}
    </NavLink>
  </li>
);

export default navbarItem;
