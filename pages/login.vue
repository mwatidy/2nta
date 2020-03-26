<template lang="pug">
section.row.flexbox-container
    .col-xl-8.col-11.d-flex.justify-content-center
        .card.bg-authentication.rounded-0.mb-0
            .row.m-0
                .col-lg-6.d-lg-block.d-none.text-center.align-self-center.px-1.py-0
                    img(src='~/assets/images/pages/login.png', alt='branding logo')
                .col-lg-6.col-12.p-0
                    .card.rounded-0.mb-0.px-2
                        .card-header.pb-1
                            .card-title
                                h4.mb-0 Login
                        p.px-2 Welcome back, please login to your account.
                        .card-content
                            .card-body.pt-1
                                form(v-on:submit.prevent="login")
                                    fieldset.form-label-group.form-group.position-relative.has-icon-left
                                        input.form-control#user-name(type='text', placeholder='Username', v-model="username", required)
                                        .form-control-position
                                            i.feather.icon-user
                                        label(for='user-name') Username
                                    fieldset.form-label-group.position-relative.has-icon-left
                                        input.form-control#user-password(type='password', placeholder='Password', v-model="password", required)
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
export default {
    layout: "singleColumn",
    head: {
        link: [
            { rel: "stylesheet", type:"text/css", href:"/app-assets/css/pages/authentication.css" }
        ],
        script: [
             { src: '/app-assets/js/aws/aws-sdk.min.js' },
             { src: '/app-assets/js/aws/aws-cognito-sdk.min.js' },
             { src: '/app-assets/js/aws/aws-cognito-identity.min.js' },
        ]
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {

            // var clientId = '4ar964bo7ka7hqkfv42dn0imdd'
            // console.log(this.username)
            // console.log(this.password)

            // var params = {
            //     AuthFlow:  'USER_PASSWORD_AUTH', 
            //     ClientId: clientId, 
            //     AuthParameters: {
            //         'USERNAME': this.username,
            //         'PASSWORD': this.password,

            //         /* '<StringType>': ... */
            //     },
            //     };


            //     var cognito = new AWS.CognitoIdentityServiceProvider();
            //     cognito.initiateAuth(params, function(err, data) {
            //         if (err) console.log(err, err.stack); // an error occurred
            //         else     console.log(data);           // successful response
            //     });




// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.


        // AWS.config.region = 'us-east-1'; // Region
        // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        //     IdentityPoolId: 'us-east-1:b32dcb9b-9c46-48e2-b358-a734b0ec539b', 
        // });
        

            var authenticationData = {
                    Username : this.username,
                    Password : this.password,
                };
                var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
                var poolData = { UserPoolId : 'us-east-1_jOZFskY9N',
                    ClientId : '4ar964bo7ka7hqkfv42dn0imdd'
                };
                var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
                var userData = {
                    Username : this.username,
                    Pool : userPool
                };
                var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: function (result) {
                        var accessToken = result.getAccessToken().getJwtToken();

                        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
                        var idToken = result.idToken.jwtToken;
                    },                    

                    onFailure: function(err) {
                        alert(err);
                    },

            });


        }
    }
}
</script>