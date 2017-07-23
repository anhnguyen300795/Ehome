import React from 'react';
import { shallow } from 'enzyme'
import MenuButton from "../MenuButton.jsx";

jest.unmock('../MenuButton.jsx')

describe('MenuButton', () => {
  const handleClick = jest.fn()
  let subject = null

  beforeEach(() => {
    subject = shallow(<MenuButton handleClick={handleClick}/>)
  })

  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

  it('should have 3 bars', () => {
    expect(subject.find('.bar').length).toBe(3);
  });

  it('should call handleClick', () => {
    subject.simulate('click')
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('should have opened/closed class after being clicked', () => {
    subject.simulate('click')
    expect(subject.find('.opened').length).toBe(1);
    subject.simulate('click')
    expect(subject.find('.opened').length).toBe(0);
    expect(subject.find('.closed').length).toBe(1);
  });

})
