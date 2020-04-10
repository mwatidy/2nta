export const state = () => ({
  userGroup: ""
})

export const mutations = {
  setUserGroup (state, userGroup) {
    state.userGroup = userGroup
  },
}