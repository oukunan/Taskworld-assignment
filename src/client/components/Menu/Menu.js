import React from 'react';

import MenuItem from './MenuItem/MenuItem';

const menu = props => {
  return (
    <div className="menu-layout">
      <ul>
        <MenuItem link="/edt" title="Edit profile" />
        <MenuItem link="/preference" title="Preference" />
      </ul>
    </div>
  );
};

export default menu;
