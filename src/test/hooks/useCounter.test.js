import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { useCounter } from '../../hooks/useCounter';

describe('Testing useCaounter hook', () => {
  it('should return values by default', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  it('should have the counter in 100', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  it('should increment the counter in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => increment());

    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  it('should decrement the counter in 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => decrement());

    const { counter } = result.current;

    expect(counter).toBe(99);
  });

  it('should reset the counter to 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
