<template lang="pug">
div.content-wrapper
  .content-header.row
    .content-header-left.col-md-9.col-12.mb-2
      .row.breadcrumbs-top
        .col-12
          h2.content-header-title.float-left.mb-0 Ferka 
          .breadcrumb-wrapper.col-12
            ol.breadcrumb
              li.breadcrumb-item
                a(href='index.html') Manasa
              li.breadcrumb-item
                a(href='#') Afkar
              li.breadcrumb-item
                a(href='app-ecommerce-shop.html') Ferkra
              li.breadcrumb-item.active.
                Camera Ta3mel Fel Zalam
                
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
    //  app ecommerce details start 
    section.app-ecommerce-details
      .card
        .card-body
          .row.mb-5.mt-2
            .col-12.col-md-5.d-flex.align-items-center.justify-content-center.mb-2.mb-md-0
              .d-flex.align-items-center.justify-content-center
                img.img-fluid(src='/app-assets/images/elements/macbook-pro.png', alt='product image')
            .col-12.col-md-6
              h5.
                3adast Camera ta3mal fel zalam bdon eda2a 
                
              p.text-muted by Mahmoud Sherif 
              .ecommerce-details-price.d-flex.flex-wrap
                p.text-primary.font-medium-3.mr-1.mb-0 GAMA3 12,350 EGP
                span.pl-1.font-medium-3.border-left
                  i.feather.icon-star.text-warning
                  i.feather.icon-star.text-warning
                  i.feather.icon-star.text-warning
                  i.feather.icon-star.text-warning
                  i.feather.icon-star.text-secondary
                span.ml-50.text-dark.font-medium-1 424 ratings
              hr
              p Me7tageen ngama3 floos 3ashan ne3mel ekhtebarat 3ala el3adasa wenshof eza kant mn elmmkn ta7amol alagwa2 alsa3ba methl el nar wal ma2 albared 
              p.font-weight-bold
                i.feather.icon-dollar-sign.mr-50.font-medium-2
                | 10 GNEH LEL SAHM

              hr
              .d-flex.flex-column.flex-sm-row
                button.btn.btn-primary.mr-0.mr-sm-1.mb-1.mb-sm-0
                  i.fa.fa-money.mr-25
                  | ESTATHMER
                button.btn.btn-outline-danger
                  i.feather.icon-heart.mr-25
                  | 3AGABETNE
              hr
              button.btn.btn-icon.rounded-circle.btn-outline-primary.mr-1.mb-1(type='button')
                i.feather.icon-facebook
              button.btn.btn-icon.rounded-circle.btn-outline-info.mr-1.mb-1(type='button')
                i.feather.icon-twitter
              button.btn.btn-icon.rounded-circle.btn-outline-danger.mr-1.mb-1(type='button')
                i.feather.icon-youtube
              button.btn.btn-icon.rounded-circle.btn-outline-primary.mr-1.mb-1(type='button')
                i.feather.icon-instagram
        .item-features.py-5
          .row.text-center.pt-2
            .col-12.col-md-4.mb-4.mb-md-0
              .w-75.mx-auto
                i.feather.icon-award.text-primary.font-large-2
                h5.mt-2.font-weight-bold 100% MAWTHOQA
                p tam tawtheeq almostanadat we 7alet elmashroo3
            .col-12.col-md-4.mb-4.mb-md-0
              .w-75.mx-auto
                i.feather.icon-clock.text-primary.font-large-2
                h5.mt-2.font-weight-bold ASHOM QABLA LELTBDEL
                p.
                  yomkn bay3 alas-hom fe ay waqt le shakhs akhar
                  
            .col-12.col-md-4.mb-4.mb-md-0
              .w-75.mx-auto
                i.feather.icon-shield.text-primary.font-large-2
                h5.mt-2.font-weight-bold ESTETHMAR AMEN
                p.
                  daman esterga3 elmal fe khelal ash-hor qaleela
                  
        .card-body
          .mt-4.mb-2.text-center
            h2 AFKAR OKHRA
            p afkar shabeha mn elmogtama3
          .swiper-responsive-breakpoints.swiper-container.px-4.py-2
            .swiper-wrapper
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Bowers Wilkins - CM10 S2 Triple 6-1/2" 3-Way Floorstanding Speaker (Each) - Gloss Black
                    
                  p
                    small by
                    small Bowers & Wilkins
                .img-container.w-50.mx-auto.my-2.py-75
                  img.img-fluid(src='/app-assets/images/elements/apple-watch.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $19.98
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Alienware - 17.3" Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce GTX 1070 - 1TB Hard Drive + 128GB Solid State Drive - Silver
                    
                  p
                    small by
                    small Alienware
                .img-container.w-50.mx-auto.my-2.py-75
                  img.img-fluid(src='/app-assets/images/elements/beats-headphones.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $35.98
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Canon - EOS 5D Mark IV DSLR Camera with 24-70mm f/4L IS USM Lens
                    
                  p
                    small by
                    small Canon
                .img-container.w-50.mx-auto.my-3.py-50
                  img.img-fluid(src='/app-assets/images/elements/macbook-pro.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $49.98
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Apple - 27" iMac with Retina 5K display - Intel Core i7 - 32GB Memory - 2TB Fusion Drive - Silver
                    
                  p
                    small by
                    small Apple
                .img-container.w-50.mx-auto.my-2.py-75
                  img.img-fluid(src='/app-assets/images/elements/homepod.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $29.98
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Bowers Wilkins - CM10 S2 Triple 6-1/2" 3-Way Floorstanding Speaker (Each) - Gloss Black
                    
                  p
                    small by
                    small Bowers & Wilkins
                .img-container.w-50.mx-auto.my-2.py-75
                  img.img-fluid(src='/app-assets/images/elements/magic-mouse.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $99.98
              .swiper-slide.rounded.swiper-shadow
                .item-heading
                  p.text-truncate.mb-0.
                    
                    Garmin - fenix 3 Sapphire GPS Watch - Silver
                    
                  p
                    small by
                    small Garmin
                .img-container.w-50.mx-auto.my-2.py-75
                  img.img-fluid(src='/app-assets/images/elements/iphone-x.png', alt='image')
                .item-meta
                  .product-rating
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-warning
                    i.feather.icon-star.text-secondary
                  p.text-primary.mb-0 $59.98
            //  Add Arrows 
            .swiper-button-next
            .swiper-button-prev
    //  app ecommerce details end 

</template>

<script>
export default {
    head: {
        title: "Fekra | 2nta",
        script: [
            { src: "/app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js", body: true },
            { src: "/app-assets/vendors/js/extensions/swiper.min.js", body: true },
            { src: "/app-assets/js/scripts/forms/number-input.js", body: true },
            { src: "/app-assets/js/scripts/pages/app-ecommerce-details.js", body: true },
        ],
        link: [
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/vendors/css/extensions/swiper.min.css"},
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/vendors/css/forms/spinner/jquery.bootstrap-touchspin.css"},
          { "rel": "stylesheet", "type": "text/css", "href": "/app-assets/css/pages/app-ecommerce-details.css"},
        ],
      bodyAttrs: {
        class: 'vertical-layout vertical-menu-modern content-detached-left-sidebar ecommerce-application navbar-floating footer-static menu-expanded pace-done',
        "data-open": 'click',
        "data-menu": 'vertical-menu-modern',
        "data-col": "content-detached-left-sidebar",
      }
    }
}
</script>