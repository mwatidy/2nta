export const state = () => ({
    emailGathered: false
  })

export const mutations = {
  markAsGathered(state) {
    state.emailGathered = true
  }

}