<template lang="pug">
section
    .row.d-flex.vh-100.align-items-center.justify-content-center
        .col-xl-5.col-md-8.col-sm-10.col-12.px-md-0.px-2
            
            .card.text-center.w-100.mb-0
                .card-header.justify-content-center.pb-0
                    .card-title
                        h2.my-2 2NTA is coming soon.
                .card-content
                    .card-body.pt-0
                        img.img-responsive.block.width-150.mx-auto(src='~/assets/images/pages/rocket.png', width='150', alt='bg-img')
                        #clockFlat.card-text.text-center.getting-started.pt-2.d-flex.justify-content-center.flex-wrap
                        client-only
                            div(v-if="collected")
                                .divider
                                    .divider-text Email gathered
                                p.text-center We will send you an email as soon as we are live

                            div(v-else)
                                .divider
                                    .divider-text Stay updated
                                p.text-left.
                                    
                                    Leave us your email and we will let you know as soon as we launch
                                    
                                form.form-horizontal(v-on:submit.prevent="saveEmail()")
                                    fieldset.form-label-group
                                        input.form-control#user-email(type='email', placeholder='Email', v-model="email", required)
                                        label(for='user-email') Email

                                button.btn.btn-primary.w-100(@click="saveEmail()") Inform Me
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
        ]
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
    mounted() {
        console.log(this.$auth)
        console.log(this.$auth.isAuthenticated)

        
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
