import React from 'react';
import { shallow } from 'enzyme'
import Login from "../Login.jsx";

jest.unmock('../Login.jsx')

describe('Login', () => {
  it('should exist', () => {
    const props = {
      opened: true
    }
    const subject = shallow(<Login {...props}/>)
    expect(subject).toBeTruthy()
  });

  it('should not has opened class', () => {
    const props = {
      opened: false
    }
    const subject = shallow(<Login {...props}/>)
    expect(subject.find('.modal-opened').length).toBe(0)
  })

})
