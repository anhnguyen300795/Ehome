export const getUser = (state) => {
  return state.entities.user.size ? state.entities.user.toJS() : null
}
