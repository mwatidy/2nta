<template lang="pug">
section
    .row.d-flex.vh-100.align-items-center.justify-content-center
        .col-md-8.col-sm-10.col-12.p-4
            
            .row.text-center
                .col-12
                    h2.my-2 Welcome to 2NTA
            .row
                .col-12.col-md-6.py-4
                    .card.text-white.bg-gradient-info.text-center
                        .card-content
                            .card-body
                                span.h1.text-white.mt-3.mb-1.d-block
                                    i.fa.fa-building-o
                                h3.card-title.text-white Sharekat
                                p Dawar 3ala mwazafen bsohola
                .col-12.col-md-6.py-4
                    .card.text-white.bg-gradient-success.text-center
                        .card-content
                            .card-body
                                span.h1.text-white.mt-3.mb-1.d-block
                                    i.fa.fa-user-o
                                h3.card-title.text-white Afrad
                                p Shoghl lghayt 3andak bsohola


</template>

<script>
export default {
  layout: 'singleColumn',
    head: {
        link: [
            { rel:'stylesheet', type: 'text/css', href: '/app-assets/css/pages/coming-soon.css' }
        ],
        script: [ 
        ],
        bodyAttrs: { 
            class: 'vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page',
            "data-open": 'click', 
            "data-menu": 'vertical-menu-modern', 
            "data-col": '1-column'
        }
    },
}
</script>
