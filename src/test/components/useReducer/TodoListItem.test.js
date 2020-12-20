import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing <TodoListItem/>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenLastCalledWith(demoTodos[0].id);
  });

  it('should call hangleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleDelete).toHaveBeenLastCalledWith(demoTodos[0].id);
  });

  it('should show text correctly', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`${1}. ${demoTodos[0].desc}`);
  });

  it('should has the class completed, if TODO.done is true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />);
    expect(wrapper.find('p').hasClass('completed')).toBe(true);
  });
});
