import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = props => (
  <li>
    <NavLink to={props.link}>{props.title}</NavLink>
  </li>
);

export default menuItem;
