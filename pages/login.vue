<template lang="pug">

section.row.flexbox-container(v-if="step === steps.loading")
    .col-xl-8.col-10.d-flex.justify-content-center
        .card.rounded-0.mb-0.p-5.d-flex.flex-row
            .spinner-border.text-primary(role="status")
                span.sr-only Loading...
            h1.pl-2 Loading ... 

section.row.flexbox-container(v-else-if="step === steps.code")
    .col-xl-8.col-10.d-flex.justify-content-center
        .card.rounded-0.mb-0
            .row.m-0
                .col-12.p-0
                    .card.rounded-0.mb-0.p-2
                        .card-header.pt-50.pb-1
                            .card-title
                                h4.mb-0 Confirm Email
                        p.px-2 Please check your email to find the code
                        .card-content
                            .card-body.pt-0 
                                .alert.alert-danger.alert-dismissible.fade.show(v-if="confirmError")
                                    p.mb-0 {{ confirmError }}
                                    button.close(type="button", data-dismiss="alert", aria-label="Close")

                                form(v-on:submit.prevent="confirm")
                                    .form-label-group
                                        input#inputName.form-control(type='text', v-bind:class="{ 'border-danger': confirmError }" placeholder='Confirmation Code', v-model="code")
                                        label(for='inputName') Confirmation Code

                                    button.btn.btn-primary.float-right.btn-inline.mb-50(type="submit")
                                        | Confirm Code






section.row.flexbox-container(v-else)
    .col-xl-8.col-11.d-flex.justify-content-center
        .card.bg-authentication.rounded-0.mb-0
            .row.m-0
                .col-lg-6.d-lg-block.d-none.text-center.align-self-center.px-1.py-0
                    img(src='~/assets/images/pages/login.png', alt='branding logo')
                .col-lg-6.col-12.p-0
                    .alert.alert-danger.alert-dismissible.fade.show(v-if="signInError")
                        p.mb-0 {{ signInError }}
                        button.close(type="button", data-dismiss="alert", aria-label="Close")

                    .card.rounded-0.mb-0.px-2
                        .card-header.pb-1
                            .card-title
                                h4.mb-0 Login
                        p.px-2 Welcome back, please login to your account.
                        .card-content
                            .card-body.pt-1
                                form(v-on:submit.prevent="login")
                                    fieldset.form-label-group.form-group.position-relative.has-icon-left
                                        input.form-control#user-name(type='text', placeholder='Email', class="{ border-danger: !validEmail}", v-model="username", required)
                                        div(class="text-danger" v-if="!validEmail") Please make sure your right a correct email
                                        .form-control-position
                                            i.feather.icon-user
                                        label(for='user-name') Email
                                    fieldset.form-label-group.position-relative.has-icon-left
                                        input.form-control#user-password(type='password', placeholder='Password', class="{ border-danger: !validPass}", v-model="password", required)
                                        div(class="text-danger" v-if="!validPass") Please make sure you wrote a correct password
                                        .form-control-position
                                            i.feather.icon-lock
                                        label(for='user-password') Password
                                    .form-group.d-flex.justify-content-between.align-items-center
                                        .text-left
                                            fieldset.checkbox
                                                .vs-checkbox-con.vs-checkbox-primary
                                                    input(type='checkbox')
                                                    span.vs-checkbox
                                                        span.vs-checkbox--check
                                                            i.vs-icon.feather.icon-check
                                                    span Remember me
                                        .text-right
                                            a.card-link(href='auth-forgot-password.html') Forgot Password?
                                    a.btn.btn-outline-primary.float-left.btn-inline(href='auth-register.html') Register
                                    button.btn.btn-primary.float-right.btn-inline(type='submit') Login
                        .login-footer
                            .divider
                                .divider-text OR
                            .footer-btn.d-inline
                                a.btn.btn-facebook(href='#')
                                    span.fa.fa-facebook
                                a.btn.btn-twitter.white(href='#')
                                    span.fa.fa-twitter
                                a.btn.btn-google(href='#')
                                    span.fa.fa-google
                                a.btn.btn-github(href='#')
                                    span.fa.fa-github-alt

</template>

<script>
const steps = {
    loading: "LOADING",
    login: "LOGIN",
    code: "CODE"

}

export default {
    layout: "singleColumn",
    head: {
        link: [
            { rel: "stylesheet", type:"text/css", href:"/app-assets/css/pages/authentication.css" }
        ],
    },
    data() {
        return {
            username: "",
            password: "",
            code: "",
            step: steps.login,
            steps,
            confirmError: false,
            validEmail: true,
            validPass: true,
            signInError: false,
            confirmError: false
        }
    },
    mounted() {

        this.$auth.isAuthenticated && this.$router.push('/user/')

    },
    methods: {
        validateEmail() {

            if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.username)) {
            
                this.validEmail = false
                return false
                
            }

            this.validEmail = true
            return true
            

        },
        validatePass() {

            if(!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/.test(this.password)) {

                this.validPass = false
                return false

            }
            this.validPass = true
            return true

        },
        async login() {

            if(this.validateEmail() && this.validatePass()) {
                try {

                    this.step = this.steps.loading
                    await this.$store.dispatch('auth/login', { email: this.username, password: this.password })
                    this.$router.push('/user/')


                } catch (e) {

                    console.log(e)
                    switch(e.code) {

                        case "UserNotFoundException":
                            this.step = this.steps.login
                            this.signInError = "This account doesn't exist"
                            break;

                        case "UserNotConfirmedException":
                            this.step = this.steps.code;
                            await this.$store.dispatch('auth/resendSignup', { email: this.username })
                            break;
                        
                        default: 
                            this.step = this.steps.login
                            this.signInError = e.message
                            break;
                    }


                }
            }

        },
        async confirm() {

            this.step = this.steps.loading

            try { 

                await this.$store.dispatch('auth/confirmRegisteration', { email: this.username, code: this.code })
                try {

                    await this.$store.dispatch('auth/login', { email: this.username, password: this.password }) 
                    this.$router('/users/')

                } catch (e) {

                    this.step = this.steps.login
                    this.signInError = e.message

                }

                

            } catch (error) {

                this.step = this.steps.code
                this.confirmError = error.message

                console.log({ error })


            }

        }
    }
}
</script>