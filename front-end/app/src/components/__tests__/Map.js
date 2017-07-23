import React from 'react';
import { shallow } from 'enzyme'
import Map from "../Map.jsx";

jest.unmock('../Map.jsx')

describe('Map', () => {
  const props = {
    latitude: 20,
    longitude: 50
  }
  const subject = shallow(<Map {...props}/>)

  it('should exist', () => {
    expect(subject).toBeTruthy()
  });

})
