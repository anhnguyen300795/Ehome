import React from 'react';
import { shallow } from 'enzyme'
import Spinner from "../Spiner.jsx";

jest.unmock('../Spiner.jsx')

describe('Spinner', () => {
  const subject = shallow(<Spinner/>)

  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

  it('should have spinner class', () => {
    expect(subject.find('.spinner').length).toBe(1);
  });

  it('should have spinner-container class', () => {
    expect(subject.find('.spinner-container').length).toBe(1);
  });

})
