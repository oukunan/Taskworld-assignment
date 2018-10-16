import React from 'react';
import SubLayout from '../SubLayout/SubLayout';
import Menu from '../Menu/Menu';
const containerLayout = props => (
  <div className="container-layout">
    {props.isAuth ? (
      <SubLayout child="left-child">
        <Menu />
      </SubLayout>
    ) : null}
    <SubLayout child="right-child">{props.children}</SubLayout>
  </div>
);

export default containerLayout;
