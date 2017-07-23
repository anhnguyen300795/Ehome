import React from 'react';
import { shallow } from 'enzyme'
import Post from "../Post.jsx";

jest.unmock('../Post.jsx')

describe('Post', () => {
  const props = {
    post: {
      street: "",
      city: "",
      id: 2,
      imageUrls: ["fdsaf"],
      price: 0,
      owner: "ehome",
      bedrooms: 2,
      bathrooms: 3,
      parkingType: "fds",
      lotSizeSqFt: "20"
    }
  }
  const subject = shallow(<Post {...props}/>)

  it('should exist', () => {
    expect(subject).toBeTruthy()
  });
})
