<template lang="pug">
  div
    Header
    MenuCompany
    .app-content.content
      .content-overlay
      .header-navbar-shadow
      Nuxt

    .sidenav-overlay
    .drag-target
    Footer
</template>


<script>
import MenuCompany from '~/components/MenuCompany.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    MenuCompany,
    Header,
    Footer
  }
}
</script>