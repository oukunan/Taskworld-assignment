import React from 'react';

import MenuItem from './MenuItem/MenuItem';

const menu = props => {
  return (
    <div className="menu">
      <ul>
        <MenuItem link="/profile" title="Edit profile" />
        <MenuItem link="/preference" title="Preference" />
        <MenuItem link="/" title="Password" />
        <MenuItem link="/" title="Notification" />
        <MenuItem link="/" title="Connected Account" />
        <MenuItem link="/" title="Orders" />
        <MenuItem link="/" title="Payment" />
        <MenuItem link="/" title="Shipping" />
        <MenuItem link="/" title="Credits & Referals" />
      </ul>
    </div>
  );
};

export default menu;
