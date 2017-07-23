import axios from 'axios'
import { schema, normalize } from 'normalizr'

import store from './store'
import postActions from './entities/posts/actions.js'
import userActions from './entities/users/actions.js'
import * as fetchActions from './Fetching/fetching-actions.js'

const EXAMPLE_ULR = '/api'

const postsSchema = new schema.Entity('posts')
const imageSchema = new schema.Entity('images', {}, { idAttribute: 'url' })
postsSchema.define({
  imageUrls: [imageSchema]
})

axios.defaults.headers.common['withCredentials'] = true;


axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token')


axios.interceptors.response.use(res => res, err => {
  if (err.response.status === 401) {
    localStorage.setItem('token', null)
    axios.defaults.headers.common['x-access-token'] = ''
    store.dispatch(userActions.logOut())
  }
  return Promise.reject(err);
})

export const fetchPosts = (queryParams = "") => {
  return {
    type: 'HANDLE_PROMISE',
    types: [fetchActions.fetchingHouses, postActions.fetchPosts],
    api: axios.get(`${EXAMPLE_ULR}/posts${queryParams}`)
      .then(res => {
        const { entities: { posts } } = normalize(res.data, [postsSchema])
        return posts
      })
  }
}

export const createPost = (data) => {
  return axios.post(EXAMPLE_ULR, data)
    .then(res => {
      return createPost(res)
    })
}

export const updatePost = (data) => {
  const { id } = data
  delete data['imageUrls']
  return axios.put(`${EXAMPLE_ULR}/posts/${id}`, data)
    .then(res => {
      const { entities: { posts } } = normalize(res.data, postsSchema)
      console.log(posts);
      //updatePost(posts)
      return postActions.updatePost(posts)
    })
}

export const deletePost = (id) => {
  return axios.delete(`${EXAMPLE_ULR}/posts/${id}`)
    .then(res => {
      return postActions.deletePost(String(id))
    })
}

export const login = (user) => {
  const { username, password } = user

  return axios.post(`${EXAMPLE_ULR}/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      return userActions.logIn(res.data)
    })
}

export const logOut = () => {
  return axios.get(`${EXAMPLE_ULR}/auth/logout`)
    .then(res => userActions.logOut())
}

export const signUp = (user) => {
  return axios.post(`${EXAMPLE_ULR}/auth/signup`, user)
    .then(res => {
      return { res, type: "" }
    })
}

export const getCurrentUser = (user) => {
  return axios.get(`${EXAMPLE_ULR}/auth/currentUser`)
    .then((res) => {
      if (res.data) return userActions.logIn(res.data)
      return { type: "" }
    })
}

export const sendOrder = (order) => {
  return axios.post(`${EXAMPLE_ULR}/posts/orders`, order)
    .then((res) => {
      return { type: "" }
    })
}
