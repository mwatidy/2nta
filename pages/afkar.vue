<template lang="pug">
div.content-wrapper
  .content-header.row
    .content-header-left.col-md-9.col-12.mb-2
      .row.breadcrumbs-top
        .col-12
          h2.content-header-title.float-left.mb-0 Afkar ElMogtama3

    .content-header-right.text-md-right.col-md-3.col-12.d-md-block.d-none
      .form-group.breadcrum-right
        .dropdown
          button.btn-icon.btn.btn-primary.btn-round.btn-sm.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
            i.feather.icon-share
          .dropdown-menu.dropdown-menu-right
            a.dropdown-item(href='#') Sharek
  .content-detached.content-right
    .content-body
      // Ecommerce Content Section Starts
      section#ecommerce-header
        .row
          .col-sm-12
            .ecommerce-header-items
              .result-toggler
                button.navbar-toggler.shop-sidebar-toggler(type='button', data-toggle='collapse')
                  span.navbar-toggler-icon.d-block.d-lg-none
                    i.feather.icon-menu
                .search-results
                  | 289 Fekra 
              .view-options
                select#ecommerce-price-options.price-options.form-control
                  option(selected='') Featured
                  option(value='1') Lowest
                  option(value='2') Highest
      // Ecommerce Content Section Starts
      // background Overlay when sidebar is shown  starts
      .shop-content-overlay
      // background Overlay when sidebar is shown  ends
      // Ecommerce Search Bar Starts
      section#ecommerce-searchbar
        .row.mt-1
          .col-sm-12
            fieldset.form-group.position-relative
              input#iconLeft5.form-control.search-product(type='text', placeholder='Search here')
              .form-control-position
                i.feather.icon-search
      // Ecommerce Search Bar Ends
      // Ecommerce Products Starts
      section#ecommerce-products.list-view
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              nuxt-link(to="/fekra")
                img.img-fluid(src='/app-assets/images/pages/eCommerce/1.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                div
                  h6.item-price
                    | Mahmoud Sherif
              .item-name.mt-2
                nuxt-link(to="/fekra") Camera betsawar beleel
              div
                p.item-description
                  | Idafat 3adasa gdeeda tag3al ay camera mahma kant modelha aw shaklaha tosbeh gaheza leltasweer alayle
                  | wa tomaken elmosawereen mn elteqat sowar bghd elnazr 3an eleda2a. Al3adasa alan ta7t eltatweer wa 
                  | stkoon gahza fe khlal 24 yoom mn alan. 
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | Mahmoud Sherif
              .wishlist
                i.fa.fa-heart-o
                span 3agabetne
              .cart
                i.fa.fa-money
                span.add-to-cart Estathmer

      // Ecommerce Products Ends
      // Ecommerce Pagination Starts
      section#ecommerce-pagination
        .row
          .col-sm-12
            nav(aria-label='Page navigation example')
              ul.pagination.justify-content-center.mt-2
                li.page-item.prev-item
                  a.page-link(href='#')
                li.page-item.active
                  a.page-link(href='#') 1
                li.page-item.next-item
                  a.page-link(href='#')
      // Ecommerce Pagination Ends
  .sidebar-detached.sidebar-left
    .sidebar
      // Ecommerce Sidebar Starts
      #ecommerce-sidebar-toggler.sidebar-shop
        .row
          .col-sm-12
            h6.filter-heading.d-none.d-lg-block Filters
        span.sidebar-close-icon.d-block.d-md-none
          i.feather.icon-x
        .card
          .card-body
            .multi-range-price
              .multi-range-title.pb-75
                h6.filter-title.mb-0 Multi Range
              ul#price-range.list-unstyled.price-range
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='price-range', checked='', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 All
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='price-range', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50  <=$10
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='price-range', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 $10 - $100
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='price-range', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 $100 - $500
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='price-range', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 >= $500
            // /Price Filter
            hr
            // /Price Slider
            .price-slider
              .price-slider-title.mt-1
                h6.filter-title.mb-0 Slider
              .price-slider
                .price_slider_amount.mb-2
                .form-group
                  #price-slider.slider-sm.my-1.range-slider
            // /Price Range
            hr
            // Categories Starts
            #product-categories
              .product-category-title
                h6.filter-title.mb-1 Categories
              ul.list-unstyled.categories-list
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false', checked='')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Appliances
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50  Audio
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Cameras & Camcorders
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Car Electronics & GPS
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Cell Phones
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Computers & Tablets
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50  Health, Fitness & Beauty
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 Office & School Supplies
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50 TV & Home Theater
                li
                  span.vs-radio-con.vs-radio-primary.py-25
                    input(type='radio', name='category-filter', value='false')
                    span.vs-radio
                      span.vs-radio--border
                      span.vs-radio--circle
                    span.ml-50
                      | Video Games
            // Categories Ends
            hr
            // Brands
            .brands
              .brand-title.mt-1.pb-1
                h6.filter-title.mb-0 Brands
              #brands.brand-list
                ul.list-unstyled
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span Insignia™
                    span 746
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span
                        | Samsung
                    span 633
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span
                        | Metra
                    span 591
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span HP
                    span 530
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span Apple
                    span 442
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span GE
                    span 394
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span Sony
                    span 350
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span Incipio
                    span 320
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span KitchenAid
                    span 318
                  li.d-flex.justify-content-between.align-items-center.py-25
                    span.vs-checkbox-con.vs-checkbox-primary
                      input(type='checkbox', value='false')
                      span.vs-checkbox
                        span.vs-checkbox--check
                          i.vs-icon.feather.icon-check
                      span Whirlpool
                    span 298
            // /Brand
            hr
            // Rating section starts
            #ratings
              .ratings-title.mt-1.pb-75
                h6.filter-title.mb-0 Ratings
              .d-flex.justify-content-between
                ul.unstyled-list.list-inline.ratings-list.mb-0
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li & up
                .stars-received (160)
              .d-flex.justify-content-between
                ul.unstyled-list.list-inline.ratings-list.mb-0
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li & up
                .stars-received (176)
              .d-flex.justify-content-between
                ul.unstyled-list.list-inline.ratings-list.mb-0
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li & up
                .stars-received (291)
              .d-flex.justify-content-between
                ul.unstyled-list.list-inline.ratings-list.mb-0
                  li.ratings-list-item
                    i.feather.icon-star.text-warning
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li.ratings-list-item
                    i.feather.icon-star.text-light
                  li & up
                .stars-received (190)
            // Rating section Ends
            hr
            // Clear Filters Starts
            #clear-filters
              button.btn.btn-block.btn-primary CLEAR ALL FILTERS
            // Clear Filters Ends
            // Ecommerce Sidebar Ends

</template>

<script>
export default {
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
    }
}
</script>