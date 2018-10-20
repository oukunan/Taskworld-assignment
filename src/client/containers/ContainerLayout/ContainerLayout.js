import React from 'react';
import SubLayout from '../../components/SubLayout/SubLayout';
import Menu from '../../components/Menu/Menu';

const containerLayout = ({ children, isAuth }) => (
  <div className="container-layout">
    {isAuth ? (
      <SubLayout child="left-child">
        <Menu />
      </SubLayout>
    ) : null}
    <SubLayout child="right-child">{children}</SubLayout>
  </div>
);

export default containerLayout;
