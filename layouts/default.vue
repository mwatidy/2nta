<template lang="pug">
  div
    Header
    Menu(v-if="userGroup == 'user'")
    MenuCompany(v-else)

    .app-content.content
      .content-overlay
      .header-navbar-shadow
      Nuxt

    .sidenav-overlay
    .drag-target
    Footer
</template>


<script>
import Menu from '~/components/Menu.vue'
import MenuCompany from '~/components/MenuCompany.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  computed: {
    userGroup: {
      get() {
        return this.$store.state.main.userGroup
      }
    }
  },
  components: {
    Menu,
    Header,
    Footer,
    MenuCompany
  }
}
</script>