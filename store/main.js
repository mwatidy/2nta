export const state = () => ({
  companyAccount: false
})

export const mutations = {
  changeAccount (state) {
    state.companyAccount = !state.companyAccount
  },
}