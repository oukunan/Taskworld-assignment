import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = props => (
  <li>
    <a href={props.link}>{props.title}</a>
  </li>
);

export default menuItem;
