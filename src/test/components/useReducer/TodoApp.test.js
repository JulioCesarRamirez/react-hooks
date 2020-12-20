import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/useReducer/TodoApp';
import { act } from '@testing-library/react';

describe('Testing <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a TODO', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  it('should delete a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
  });
});
