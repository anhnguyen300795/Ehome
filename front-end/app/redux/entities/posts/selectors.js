export const getAllPosts = (state) => {
  return state.entities.posts.toList().toJS()
}

export const getOnePost = (state, id) => {
  const entity = state.entities.posts.get(id)
  return entity ? entity.toJS() : entity
}
