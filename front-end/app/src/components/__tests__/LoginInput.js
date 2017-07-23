import React from 'react';
import { shallow } from 'enzyme'
import LoginInput from "../LoginInput.jsx";

jest.unmock('../LoginInput.jsx')

describe('LoginInput', () => {
  const props = {
    meta: {
      active: true
    },
    input: {
      name: "email",
      value: ""
    }
  }
  const subject = shallow(<LoginInput {...props}/>)
  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

  it('should have class focused when active', () => {
    expect(subject.find('.focused').length).toBe(1)
  })

})
