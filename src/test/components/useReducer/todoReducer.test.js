import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Testing TodoReducer', () => {
  it('should return the state by default', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  it('should add a TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Express',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  it('should delete a TODO', () => {
    const action = {
      type: 'delete',
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  it('should change TODO status', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
