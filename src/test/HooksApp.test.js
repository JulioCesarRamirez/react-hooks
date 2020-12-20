import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HooksApp';

describe('Test <HookApp />', () => {
  it('Should show <HookApp /> correctly', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
