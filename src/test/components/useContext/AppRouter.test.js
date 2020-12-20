import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/useContext/AppRouter';
import { UserContext } from '../../../components/useContext/UserContext';

describe('testing <AppRouter/>', () => {
  const user = {
    id: 1,
    name: 'Julio',
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  it('should ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
