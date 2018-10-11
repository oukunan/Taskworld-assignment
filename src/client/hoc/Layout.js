import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div>
            <Menu />
          </div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
