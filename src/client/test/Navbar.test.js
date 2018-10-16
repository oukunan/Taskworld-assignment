import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar/Navbar';
import NavbarSection from '../components/Navbar/NavbarSection/NavbarSection';
describe('<Navbar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('should render 1 <NavbarSection /> if not authentication', () => {
    expect(wrapper.find(NavbarSection)).toHaveLength(1);
  });
  it('should render 3 <NavbarSection /> if authentication', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavbarSection)).toHaveLength(3);
  });
});

