import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/useContext/LoginScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe('Testing <LoginScreen />', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should excecute setUser with argument expected', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Julio Cesar',
    });
  });
});
