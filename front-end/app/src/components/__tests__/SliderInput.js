import React from 'react';
import { shallow } from 'enzyme'
import SliderInput from "../SliderInput.jsx";

jest.unmock('../SliderInput.jsx')


describe('SliderInput', () => {

  const props = {
    input: {
      onChange: jest.fn(),
      value: 40
    },
    minBound: 20,
    maxBound: 50
  }
  const subject = shallow(<SliderInput {...props}/>)

  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

})
