<template lang="pug">
section.row.flexbox-container(v-if="registered")
    .col-xl-8.col-10.d-flex.justify-content-center
        .card.rounded-0.mb-0.p-5
            h1 Registeration Complete
            p.pt-1 Please check your email to validate your account

section.row.flexbox-container(v-else)
    .col-xl-8.col-10.d-flex.justify-content-center(v-if="loading")
        .card.rounded-0.mb-0.p-5.d-flex.flex-row
            .spinner-border.text-primary(role="status")
                span.sr-only Loading...
            h1.pl-2 Loading ... 
    .col-xl-8.col-10.d-flex.justify-content-center(v-else)
        .card.bg-authentication.rounded-0.mb-0
            .row.m-0
                .col-lg-6.d-lg-block.d-none.text-center.align-self-center.pl-0.pr-3.py-0
                    img(src='~/assets/images/pages/register.jpg', alt='branding logo')
                .col-lg-6.col-12.p-0(v-if="!loading")
                    .card.rounded-0.mb-0.p-2
                        .card-header.pt-50.pb-1
                            .card-title
                                h4.mb-0 Create Account
                        p.px-2 Fill the below form to create a new account.
                        .card-content
                            .card-body.pt-0
                                .alert.alert-danger.alert-dismissible.fade.show(v-if="registerationError")
                                    p.mb-0 {{ registerationError }}
                                    button.close(type="button", data-dismiss="alert", aria-label="Close")
 
                                form(v-on:submit.prevent="registerUser")
                                    .form-label-group
                                        input#inputName.form-control(type='text', v-bind:class="{ 'border-success': nameValidation == 'success', 'border-danger': nameValidation == 'error' }" placeholder='Name', v-model="name", @keyup="validateName")
                                        label(for='inputName') Name
                                        div(class="text-danger" v-if="nameValidation == 'error'") At least 2 non-special charachters. 
                                        div(class="text-success" v-if="nameValidation == 'success'") Name is valid

                                    .form-label-group
                                        input#inputEmail.form-control(type='email', v-bind:class="{ 'border-success': emailValidation == 'success', 'border-danger': emailValidation == 'error' }", placeholder='Email', v-model="email", @keyup="validateEmail")
                                        label(for='inputEmail') Email
                                        div(class="text-danger" v-if="emailValidation == 'error'") {{ emailExists ? "This email is already registered" : "Please check your email is correct" }} 
                                        div(class="text-success" v-if="emailValidation == 'success'") Email is valid


                                    .form-label-group
                                        input#inputPassword.form-control(type='password', v-bind:class="{ 'border-success': passValidation == 'success', 'border-danger': passValidation == 'error' }", placeholder='Password', v-model="password", @keyup="validatePassword")
                                        label(for='inputPassword') Password
                                        div(class="text-danger" v-if="passValidation == 'error'") Password must be at least 8 characters including 1 Upppercase, 1 Lowercase, 1 Number, and One special character !@#$&amp;*
                                        div(class="text-success" v-if="passValidation == 'success'") Password is valid


                                    .form-label-group
                                        input#inputConfPassword.form-control(type='password', v-bind:class="{ 'border-success': pass2Validation == 'success', 'border-danger': pass2Validation == 'error' }", placeholder='Confirm Password', v-model="passwordCopy", @keyup="validatePassword2")
                                        div(class="text-danger" v-if="pass2Validation == 'error'") Both passwords must match
                                        div(class="text-success" v-if="pass2Validation == 'success'") Password is valid
                                        label(for='inputConfPassword') Confirm Password


                                    .form-group.row
                                        .col-12
                                            fieldset.checkbox
                                                .vs-checkbox-con.vs-checkbox-primary
                                                    input(type='checkbox', checked)
                                                    span.vs-checkbox
                                                        span.vs-checkbox--check
                                                            i.vs-icon.feather.icon-check
                                                    span I accept the terms & conditions.
                                    nuxt-link.btn.btn-outline-primary.float-left.btn-inline.mb-50(to='auth-login.html') Login
                                    button.btn.btn-primary.float-right.btn-inline.mb-50(type="submit")
                                        | Register

</template>

<script>
export default {
    layout: "singleColumn",
    head: {
        script: [
             { src: '/app-assets/js/aws/aws-sdk.min.js' },
        ]
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            passwordCopy: "",
            nameValidation: "",
            emailValidation: "",
            passValidation: "",
            pass2Validation: "",
            loading: false,
            registered: false,
            registerationError: false,
            emailExists: false
        }
    },
    mounted() {


        AWS.config.region = 'us-east-1'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:b32dcb9b-9c46-48e2-b358-a734b0ec539b', 
        });
        var clientId = '4ar964bo7ka7hqkfv42dn0imdd'

    },
    methods: {

        validateName() {

            this.nameValidation = /^[A-Za-z0-9\s]{2,30}$/.test(this.name) ? "success" : "error";
            return this.nameValidation == "success" ? true : false
            //Password REGEX 
            // 
        },
        validatePassword() {

            // this.passValidation = /(?=^.{6,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/.test(this.password) ? "success" : "error";
            this.passValidation = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,30}$/.test(this.password) ? "success" : "error";
            

            return this.passValidation == "success" ? true : false

        },
        validateEmail() {

            this.emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.email) ? "success" : "error";
            return this.emailValidation == "success" ? true : false

        },
        validatePassword2() {

            this.pass2Validation = this.password == this.passwordCopy ? "success" : "error";
            return this.pass2Validation == "success" ? true : false

        },
        registerUser() {

            if(this.validateEmail() && this.validateName() && this.validatePassword() && this.validatePassword2()) {

                this.loading = true;
                var cognito = new AWS.CognitoIdentityServiceProvider();

                var params = {
                ClientId: clientId,
                Password: this.password, 
                Username: this.email, 
                UserAttributes: [
                    {
                    Name: 'name', /* required */
                    Value: this.name
                    },
                ],
                };

                cognito.signUp(params, function(err, data) {
                    
                    if (err) {
                        
                        window.awserror = err
                        
                        this.loading = false;
                        this.registerationError = err.message;

                        if(err.code == "UsernameExistsException") {
                            this.emailValidation = "error"
                            this.emailExists = true

                        }

                    } 
                    else {

                        this.registered = true
                        console.log(data);           

                    }     
                }.bind(this));


            }
        }
    }
}
</script>