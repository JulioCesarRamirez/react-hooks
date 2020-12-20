import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RealRefExample } from '../../../components/useRef/RealRefExample';

describe('Testing RealRefExample ', () => {
  const wrapper = shallow(<RealRefExample />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  it('should render component <MultipleCustomHooks/>', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
