import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import '@testing-library/jest-dom';

describe('Test fo useForm', () => {
  const initialForm = {
    name: 'julio',
    email: 'julio@test.com',
  };

  it('should return a from by default', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  it('should change from value (change name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });
  });

  it('should reset from when RESET is called', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      });

      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
