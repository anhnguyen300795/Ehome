import React from 'react';
import { shallow } from 'enzyme'

import { Content } from "../Content.jsx";
import LoadingSpinner from '../../components/Spiner.jsx'
import Post from '../../components/Post.jsx'

jest.unmock('../../components/Spiner.jsx')
jest.unmock('../Content.jsx')
jest.unmock('../../components/Post.jsx')

describe('Content', () => {
  it('should exist', () => {
    const props = {
      posts: [],
      housesIsLoading: false
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject).toBeTruthy()
  });

  it('should have loading spinner', () => {
    const props = {
      posts: [],
      housesIsLoading: true
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(LoadingSpinner).length).toBe(1)
  })


  it('should hide loading spinner', () => {
    const props = {
      posts: [],
      housesIsLoading: false
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(LoadingSpinner).length).toBe(0)
  })

  it('should have 0 Post', () => {
    const props = {
      posts: [],
      housesIsLoading: false
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(Post).length).toBe(0)
  })

  it('should have 1 Post', () => {
    const props = {
      posts: [{
        id: 1
      }],
      housesIsLoading: false
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(Post).length).toBe(1)
  })

  it('should have 1 Post', () => {
    const props = {
      posts: [{
        id: 1
      }, {
        id: 2
      }],
      housesIsLoading: false
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(Post).length).toBe(2)
  })

  it('should have 0 Post when loading', () => {
    const props = {
      posts: [{
        id: 1
      }, {
        id: 2
      }],
      housesIsLoading: true
    }
    const subject = shallow(<Content {...props}/>)
    expect(subject.find(Post).length).toBe(0)
  })

})
