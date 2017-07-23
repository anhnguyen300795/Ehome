import React from 'react';
import { shallow } from 'enzyme'

import { Details } from "../Details.jsx";
import LoadingSpinner from '../../components/Spiner.jsx'

jest.unmock('../../components/Spiner.jsx')
jest.unmock('../Details.jsx')

describe('Details', () => {
  it('should exist', () => {
    const props = {
      apartment: { imageUrls: [0, 1] }
    }
    const subject = shallow(<Details {...props}/>)
    expect(subject).toBeTruthy()
  });

  it('should exist', () => {
    const props = {
      apartment: null
    }
    const subject = shallow(<Details {...props}/>)
    expect(subject.find(LoadingSpinner).length).toBe(1)
  });
})
