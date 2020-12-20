import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoAdd } from '../../../components/useReducer/TodoAdd';

describe('Testing <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should NOT call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  it('should call handleAddTodo', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
