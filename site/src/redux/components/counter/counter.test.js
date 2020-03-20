import React from 'react';
import { shallow } from 'enzyme';
import { CounterComponent as Counter } from './counter';

const setup = () => {
  const props = { count: 10 };
  const wrapper = shallow(<Counter { ...props } />);

  return { props, wrapper };
}

describe("Counter Component", () => {
  const { props, wrapper } = setup();

  test('Counter Button', () => {
    expect(wrapper.find('button').length).toBe(3);
  });
});