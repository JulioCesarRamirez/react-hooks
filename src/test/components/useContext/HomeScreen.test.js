import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/useContext/HomeScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe('Testing <HomeScreen />', () => {
  const user = {
    name: 'Fernando',
    email: 'fernando@gmail.com',
  };
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <HomeScreen />
    </UserContext.Provider>
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
