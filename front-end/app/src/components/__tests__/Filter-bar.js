import React from 'react';
import { shallow } from 'enzyme'
import FilterBar from "../Filter-bar.jsx";

jest.unmock('../Filter-bar.jsx')

describe('FilterBar', () => {
  const props = {
    handleSubmit: jest.fn()
  }
  const subject = shallow(<FilterBar {...props}/>)
  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

})
