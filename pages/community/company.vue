<template lang="pug">
h1 company list
</template>

<script>
import axios from 'axios'

export default {
  layout: 'singleColumn',
    head: {
        link: [
            { rel:'stylesheet', type: 'text/css', href: '/app-assets/css/pages/coming-soon.css' }
        ],
        script: [ 
            { src:'/app-assets/vendors/js/coming-soon/jquery.countdown.min.js', body: true, defer: true },
            { src:'/app-assets/js/scripts/pages/coming-soon.js', body: true, defer: true },
        ],
        bodyAttrs: { 
            class: 'vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page',
            "data-open": 'click', 
            "data-menu": 'vertical-menu-modern', 
            "data-col": '1-column'
        }
    },
    data() {
        return {
            email: "",
            err: false,
        }
    },
    computed: {
        collected() {
                return this.$store.state.localStorage.emailGathered
            }
        },
    methods: {
        saveEmail() {
            
            if(this.email.trim().length < 5) {
                this.err = true
                return
            }
                
            if(!this.$store.state.localStorage.emailGathered) {
                axios.post('/api/email', { email: this.email }).then(_ => {
                    this.$store.commit('localStorage/markAsGathered')
                })   
            }
        }
    },
}
</script>

<style>

</style>
