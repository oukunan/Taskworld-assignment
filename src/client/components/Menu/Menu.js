import React from 'react';

import MenuItem from './MenuItem/MenuItem';

const menu = props => {
  return (
    <div className="menu-layout">
      <ul>
        <MenuItem link="/preference" title="Preference" />
        <MenuItem link="/profile" title="Edit profile" />
      </ul>
    </div>
  );
};

export default menu;
