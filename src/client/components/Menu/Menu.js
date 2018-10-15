import React from 'react';

import MenuItem from './MenuItem/MenuItem';

const menu = props => {
  return (
    <div className="menu">
      <ul>
        <MenuItem link="/profile" title="Edit profile" />
        <MenuItem link="/preference" title="Preference" />
        <MenuItem link="/password" title="Password" />
        <MenuItem link="/notification" title="Notification" />
        <MenuItem link="/connected" title="Connected Account" />
        <MenuItem link="/order" title="Orders" />
        <MenuItem link="/payment" title="Payment" />
        <MenuItem link="/shipping" title="Shipping" />
        <MenuItem link="/credits" title="Credits & Referals" />
      </ul>
    </div>
  );
};

export default menu;
