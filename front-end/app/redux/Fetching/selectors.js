export const getFetchingByName = (state, name) => {
  return state.fetching.get(name)
}
