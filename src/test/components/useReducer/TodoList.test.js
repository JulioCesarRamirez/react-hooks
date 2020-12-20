import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/useReducer/TodoList';

describe('Testing <TodoList/>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleDelete={handleToggle}
    />
  );
  it('should render correctly', () => {
    expect(wrapper).toThrowErrorMatchingSnapshot();
  });
  it('should have two <TodoListItem/>', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
