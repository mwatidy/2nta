<template lang="pug">
.content-wrapper
    .content-header.row
        .content-header-left.col-md-9.col-12.mb-2
            .row.breadcrumbs-top
                .col-12
                    h2.content-header-title.float-left.mb-0 Sharekat
                                
        .content-header-right.text-md-right.col-md-3.col-12.d-md-block.d-none
            .form-group.breadcrum-right
                .dropdown
                    button.btn-icon.btn.btn-primary.btn-round.btn-sm.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
                        i.feather.icon-settings
                    .dropdown-menu.dropdown-menu-right
                        a.dropdown-item(href='#') Chat
                        a.dropdown-item(href='#') Email
                        a.dropdown-item(href='#') Calendar
    .content-body
        //  Search Bar 
        section#search-bar
            .search-bar
                form
                    fieldset.form-group.position-relative.has-icon-left
                        input.form-control.round#searchbar(type='text', placeholder='Bahth Sharekat')
                        .form-control-position
                            i.feather.icon-search.px-1
            .row.search-result-info.mt-2.mb-1
                .col-sm-8.float-left
                    p.mt-1 Approx 84,00,00,000 results (0.35s)
                .col-sm-4.float-right.text-sm-right
                    .btn-group
                        .dropdown
                            button.btn.border-0.dropdown-toggle.px-0#dropdownItem1(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false').
                                
                                Any Time
                                
                            .dropdown-menu.dropdown-menu-right(aria-labelledby='dropdownItem1')
                                a.dropdown-item(href='#') Any Time
                                a.dropdown-item(href='#') Past Hour
                                a.dropdown-item(href='#') Past 24 Hours
                                a.dropdown-item(href='#') Past Week
                                a.dropdown-item(href='#') Past Month
                                a.dropdown-item(href='#') Past Year
                                a.dropdown-item(href='#') Custom Period
                        .dropdown
                            button.btn.border-0.dropdown-toggle.px-0.ml-1#dropdownItem2(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false').
                                
                                All Result
                                
                            .dropdown-menu.dropdown-menu-right(aria-labelledby='dropdownItem2')
                                a.dropdown-item(href='#') All Result
                                a.dropdown-item(href='#') Verbatim
        //  Search Bar end 
        //  Search Form  
        section#search-website
            .row
                .col-md-6.col-lg-4.profile-card-1(v-for="company in companies")
                    .card
                        .card-header.mx-auto
                            .avatar.avatar-xl
                                img.img-fluid(src="https://image-us.samsung.com/SamsungUS/home/samsung-logo-191-1.jpg" alt="img placeholder")
                        .card-content
                            .card-body.text-center
                                h4 Samsung
                                p Electronics
                                .card-btns.d-flex.justify-content-center
                                    button.btn.gradient-light-primary.waves-effect.waves-light Follow
                                hr.my-2
                                .d-flex.justify-content-between
                                    .float-left
                                        i.feather.icon-star.text-warning.mr-50 
                                        | 4.9
                                    .float-right
                                        i.feather.icon-briefcase.text-primary.mr-50 
                                        | 37 Projects


            
//  END: Content

</template>

<script>

// import * as queries from '~/graphql/queries';
// import * as mutations from '~/graphql/mutations';
// import * as subscriptions from '~/graphql/subscriptions';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '~/graphql/queries';



export default {
    data() {
        return {
            companies: [0,0,0,0,0,0,0]
        }
    },
    head: {
        title: "2fkar | 2nta",
        script: [
            { src: "/app-assets/vendors/js/ui/prism.min.js", body: true },
            { src: "/app-assets/vendors/js/extensions/wNumb.js", body: true },
            { src: "/app-assets/vendors/js/extensions/nouislider.min.js", body: true },
            { src: "/app-assets/vendors/js/forms/select/select2.full.min.js", body: true },
            { src: "/app-assets/js/scripts/pages/app-ecommerce-shop.js", body: true },
        ],
        link: [
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/vendors/css/extensions/nouislider.min.css"},
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/vendors/css/ui/prism.min.css"},
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/vendors/css/forms/select/select2.min.css" },
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/css/plugins/extensions/noui-slider.min.css" },
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/css/pages/app-ecommerce-shop.css" }
        ],
      bodyAttrs: {
        class: 'vertical-layout vertical-menu-modern content-detached-left-sidebar ecommerce-application navbar-floating footer-static menu-expanded pace-done',
        "data-open": 'click',
        "data-menu": 'vertical-menu-modern',
        "data-col": "content-detached-left-sidebar",
      }
    },
    mounted() {

        API.graphql(graphqlOperation(queries.ideas)).then(data => {

            console.log("ideas are")
            console.log(data)

        }).catch(console.log)
        
        //const newTodo = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));



    },
}
</script>