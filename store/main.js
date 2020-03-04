export const state = () => ({
  isEmployee: true
})

export const mutations = {
  changeAccount (state) {
    state.isEmployee = !state.isEmployee
  },
}