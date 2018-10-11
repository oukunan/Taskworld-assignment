import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-layout">
          <div className="sub-layout menu-layout">
            <Menu />
          </div>
          <div className="sub-layout child-layout">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
