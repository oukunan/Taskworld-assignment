import React from 'react';

import Child from '../Child/Child';
import MenuItem from './MenuItem/MenuItem';

const menuItemList = [
  { link: '/profile', title: 'Edit Profile' },
  { link: '/preference', title: 'Preference' },
  { link: '/password', title: 'Password' },
  { link: '/notification', title: 'Notification' },
  { link: '/connected', title: 'Connected Account' },
  { link: '/order', title: 'Orders' },
  { link: '/payment', title: 'Payment' },
  { link: '/shipping', title: 'Shipping' },
  { link: '/credits', title: 'Credits & Referrals' }
];

const menu = props => {
  const lists = menuItemList.map(item => (
    <MenuItem key={item.link} link={item.link} title={item.title} />
  ));
  return (
    <Child position="left">
      <div className="menu">
        <ul>{lists}</ul>
      </div>
    </Child>
  );
};

export default menu;
