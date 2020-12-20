import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Testing MultipleHooks', () => {
  it('should render the component correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show information', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Fernando',
          quote: 'Hola mundo',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
    expect(wrapper.find('footer').text().trim()).toBe('Fernando');
  });
});
