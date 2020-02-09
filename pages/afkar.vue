<template lang="pug">
div
  .content-header.row
    .content-header-left.col-md-9.col-12.mb-2
      .row.breadcrumbs-top
        .col-12
          h2.content-header-title.float-left.mb-0 Shop
          .breadcrumb-wrapper.col-12
            ol.breadcrumb
              li.breadcrumb-item
                a(href='index.html') Home
              li.breadcrumb-item
                a(href='#') eCommerce
              li.breadcrumb-item.active
                | Shop
    .content-header-right.text-md-right.col-md-3.col-12.d-md-block.d-none
      .form-group.breadcrum-right
        .dropdown
          button.btn-icon.btn.btn-primary.btn-round.btn-sm.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
            i.feather.icon-settings
          .dropdown-menu.dropdown-menu-right
            a.dropdown-item(href='#') Chat
            a.dropdown-item(href='#') Email
            a.dropdown-item(href='#') Calendar
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
                  | 16285 results found
              .view-options
                select#ecommerce-price-options.price-options.form-control
                  option(selected='') Featured
                  option(value='1') Lowest
                  option(value='2') Highest
                .view-btn-option
                  button.btn.btn-white.view-btn.grid-view-btn.active
                    i.feather.icon-grid
                  button.btn.btn-white.list-view-btn.view-btn
                    i.feather.icon-list
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
      section#ecommerce-products.grid-view
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/1.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                div
                  h6.item-price
                    | $39.99
              .item-name
                a(href='app-ecommerce-details.html') Amazon - Fire TV Stick with Alexa Voice Remote - Black
                p.item-company
                  | By 
                  span.company-name Google
              div
                p.item-description
                  | Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you
                  | deliver hands-free commands when you want to watch television or engage with other applications. With a
                  | quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast
                  | for buffer-free streaming.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $39.99
              .wishlist
                i.fa.fa-heart-o
                span Wishlist
              .cart
                i.feather.icon-shopping-cart
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/2.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                div
                  h6.item-price
                    | $35.00
              .item-name
                a(href='app-ecommerce-details.html') Google - Chromecast - Black
                p.item-company
                  | By 
                  span.company-name Amazon
              div
                p.item-description
                  | Google Chromecast: Enjoy a world of entertainment with Google Chromecast. Just connect to your HDTV's HDMI
                  | interface and your home Wi-Fi network to get started. You can stream your favorite apps from your compatible
                  | phone, tablet or laptop, plus use your phone as a remote to search, play and pause content.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $35.00
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/3.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                div
                  .item-cost
                    h6.item-price
                      | $499.99
              .item-name
                a(href='app-ecommerce-details.html') Dell - Inspiron 15.6" Touch-Screen Laptop - Black
                p.item-company
                  | By 
                  span.company-name Dell
              div
                p.item-description
                  | Dell Inspiron Laptop: Get speed and performance from this 15.6-inch Dell Inspiron laptop. Supported by an
                  | Intel Core i5-5200U processor and 6GB of DDR3L RAM, this slim touch screen laptop lets you run multiple
                  | applications without lag. The 1TB hard drive in this Dell Inspiron laptop lets you store multiple music,
                  | video and document files.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $499.99
                  p.shipping
                    i.feather.icon-shopping-cart
                    |  Free Shipping
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/4.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $49.99
              .item-name
                a(href='app-ecommerce-details.html') Amazon - Echo Dot
                p.item-company
                  | By 
                  span.company-name Amazon
              div
                p.item-description
                  | Echo Dot is the latest addition to Amazon's voice-controlled devices.
                  | Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device.
                  | Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The
                  | Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone
                  | or tablet.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $49.99
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/5.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $999.99
              .item-name
                a(href='app-ecommerce-details.html')
                  | Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver
                p.item-company
                  | By 
                  span.company-name Apple
              div
                p.item-description
                  | MacBook Air is a thin, lightweight laptop from Apple.
                  | MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great
                  | built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and
                  | powerful enough to do everything once you get there, better.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $999.99
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/6.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $429.99
              .item-name
                a(href='app-ecommerce-details.html')
                  | Sharp - 50" Class (49.5" Diag.) - LED - 1080p - Black
                p.item-company
                  | By 
                  span.company-name Sharp
              div
                p.item-description
                  | Only at Best Buy Sharp LC-50LB481U LED Roku TV: Get a TV that enjoys full Internet connectivity with this
                  | Sharp 49.5-inch smart TV. Full HD resolutions give you plenty of detail whether you're streaming content
                  | from the Internet using the integrated Roku player or watching via cable.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $429.99
                  p.shipping
                    i.feather.icon-shopping-cart
                    |  Free Shipping
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/7.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $129
              .item-name
                a(href='app-ecommerce-details.html')
                  | Google - Google Home - White/Slate fabric
                p.item-company
                  | By 
                  span.company-name Google
              div
                p.item-description
                  | Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant.
                  | Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is
                  | compatible with Android and iOS operating systems, and can control compatible smart devices such as
                  | Chromecast or Nest.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $129
                  p.shipping
                    i.feather.icon-shopping-cart
                    |  Free Shipping
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/10.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $29.99
              .item-name
                a(href='app-ecommerce-details.html')
                  | Apple - EarPods™ with Remote and Mic - White
                p.item-company
                  | By 
                  span.company-name Apple
              div
                p.item-description
                  | Apple EarPods are white in-ear headphones included with music players and smartphones designed and marketed
                  | by Apple Inc. They are designed to fit the ear while retaining a new design pushed by Apple alongside the
                  | iPod and iPod Touch products, with which they were sold together.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $29.99
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
        .card.ecommerce-card
          .card-content
            .item-img.text-center
              a(href='app-ecommerce-details.html')
                img.img-fluid(src='/app-assets/images/pages/eCommerce/9.png', alt='img-placeholder')
            .card-body
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $14.99
              .item-name
                a(href='app-ecommerce-details.html')
                  | Philips - hue A19 Smart LED Light Bulb - White Only
                p.item-company
                  | By 
                  span.company-name Philips
              div
                p.item-description
                  | Philips hue A19 Smart LED Light Bulb: Get lighting that's as smart as you are. You can easily dim this light
                  | bulb and set timers and alarms using your smartphone or tablet. Plus, LED technology offers lasting
                  | illumination while using minimal energy.Get lighting that's as smart as you are.
            .item-options.text-center
              .item-wrapper
                .item-rating
                  .badge.badge-primary.badge-md
                    span 4
                    i.feather.icon-star
                .item-cost
                  h6.item-price
                    | $14.99
              .wishlist
                i.fa.fa-heart-o.mr-25
                |  Wishlist
              .cart
                i.feather.icon-shopping-cart.mr-25
                span.add-to-cart Add to cart
                a.view-in-cart.d-none(href='app-ecommerce-checkout.html') View In Cart
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
                li.page-item
                  a.page-link(href='#') 2
                li.page-item
                  a.page-link(href='#') 3
                li.page-item(aria-current='page')
                  a.page-link(href='#') 4
                li.page-item
                  a.page-link(href='#') 5
                li.page-item
                  a.page-link(href='#') 6
                li.page-item
                  a.page-link(href='#') 7
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
            { src: "/app-assets/vendo/prism.min.js", body: true },
            { src: "/app-assets/vendors/js/extensions/wNumb.js", body: true },
            { src: "/app-assets/vendors/js/extensions/nouislider.min.js", body: true },
            { src: "/app-assets/vendors/js/forms/select/select2.full.min.js", body: true },
            { src: "/app-assets/js/scripts/pages/app-ecommerce-shop.js", body: true },
        ],
        link: [
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/extensions/nouislider.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/ui/prism.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/forms/select/select2.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/css/plugins/extensions/noui-slider.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/css/pages/app-ecommerce-shop.css"
        }
    ]
    }   
}
</script>