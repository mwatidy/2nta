<template lang="pug">
  div
    Header
    Menu
    .app-content.content
      .content-overlay
      .header-navbar-shadow
      .content-wrapper
        h1 this is a companyAccount: {{ companyAccount }}
        Nuxt

    .sidenav-overlay
    .drag-target
    Footer
</template>


<script>
import Menu from '~/components/Menu.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  computed: {
    companyAccount() {
      return this.$store.main.companyAccount || "null"
    }
  },
  components: {
    Menu,
    Header,
    Footer
  }
}
</script>