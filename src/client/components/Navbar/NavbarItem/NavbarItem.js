import React from 'react';
import { NavLink } from 'react-router-dom';

const navbarItem = props => (
  <li>
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

export default navbarItem;
