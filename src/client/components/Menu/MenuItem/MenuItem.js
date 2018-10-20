import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = ({ link, title }) => (
  <li>
    <NavLink to={link} activeClassName="is-active">
      {title}
    </NavLink>
  </li>
);

export default menuItem;
