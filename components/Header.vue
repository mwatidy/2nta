<template lang="pug">
div
  // BEGIN: Header
  nav.header-navbar.navbar-expand-lg.navbar.navbar-with-menu.floating-nav.navbar-light.navbar-shadow
    .navbar-wrapper
      .navbar-container.content
        #navbar-mobile.navbar-collapse
          .mr-auto.float-left.bookmark-wrapper.d-flex.align-items-center
            ul.nav.navbar-nav
              li.nav-item.mobile-menu.d-xl-none.mr-auto
                a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')
                  i.ficon.feather.icon-menu
            ul.nav.navbar-nav
              li.nav-item.d-none.d-lg-block
                a.nav-link.bookmark-star
                  i.ficon.feather.icon-star.warning
                  |  Stars
                .bookmark-input.search-input
                  .bookmark-input-icon
                    i.feather.icon-search.primary
                  input.form-control.input(type='text', placeholder='Explore Vuexy...', tabindex='0', data-search='template-list')
                  ul.search-list.search-list-bookmark
                // select.bookmark-select
                // option Chat
                // option email
                // option todo
                // option Calendar
          ul.nav.navbar-nav.float-right
            li.dropdown.dropdown-language.nav-item
              a#dropdown-flag.dropdown-toggle.nav-link(href='#', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
                i.flag-icon.flag-icon-eg
                span.selected-language FRANCO
              .dropdown-menu(aria-labelledby='dropdown-flag')
                a.dropdown-item(href='#', data-language='en')
                  i.flag-icon.flag-icon-us
                  |  English
                a.dropdown-item(href='#', data-language='fr')
                  i.flag-icon.flag-icon-fr
                  |  French
                a.dropdown-item(href='#', data-language='de')
                  i.flag-icon.flag-icon-de
                  |  German
                a.dropdown-item(href='#', data-language='pt')
                  i.flag-icon.flag-icon-pt
                  |  Portuguese
            li.nav-item.d-none.d-lg-block
              a.nav-link.nav-link-expand
                i.ficon.feather.icon-maximize
            li.nav-item.nav-search
              a.nav-link.nav-link-search
                i.ficon.feather.icon-search
              .search-input
                .search-input-icon
                  i.feather.icon-search.primary
                input.input(type='text', placeholder='Explore Vuexy...', tabindex='-1', data-search='template-list')
                .search-input-close
                  i.feather.icon-x
                ul.search-list.search-list-main
            li.dropdown.dropdown-notification.nav-item
              a.nav-link.nav-link-label(href='#', data-toggle='dropdown')
                i.ficon.feather.icon-bell
                span.badge.badge-pill.badge-primary.badge-up 5
              ul.dropdown-menu.dropdown-menu-media.dropdown-menu-right
                li.dropdown-menu-header
                  .dropdown-header.m-0.p-2
                    h3.white 5 New
                    span.notification-title App Notifications
                li.scrollable-container.media-list
                  a.d-flex.justify-content-between(href='javascript:void(0)')
                    .media.d-flex.align-items-start
                      .media-left
                        i.feather.icon-plus-square.font-medium-5.primary
                      .media-body
                        h6.primary.media-heading You have new order!
                        small.notification-text  Are your going to meet me tonight?
                      small
                        time.media-meta(datetime='2015-06-11T18:29:20+08:00') 9 hours ago
                  a.d-flex.justify-content-between(href='javascript:void(0)')
                    .media.d-flex.align-items-start
                      .media-left
                        i.feather.icon-download-cloud.font-medium-5.success
                      .media-body
                        h6.success.media-heading.red.darken-1 99% Server load
                        small.notification-text You got new order of goods.
                      small
                        time.media-meta(datetime='2015-06-11T18:29:20+08:00') 5 hour ago
                  a.d-flex.justify-content-between(href='javascript:void(0)')
                    .media.d-flex.align-items-start
                      .media-left
                        i.feather.icon-alert-triangle.font-medium-5.danger
                      .media-body
                        h6.danger.media-heading.yellow.darken-3 Warning notifixation
                        small.notification-text Server have 99% CPU usage.
                      small
                        time.media-meta(datetime='2015-06-11T18:29:20+08:00') Today
                  a.d-flex.justify-content-between(href='javascript:void(0)')
                    .media.d-flex.align-items-start
                      .media-left
                        i.feather.icon-check-circle.font-medium-5.info
                      .media-body
                        h6.info.media-heading Complete the task
                        small.notification-text Cake sesame snaps cupcake
                      small
                        time.media-meta(datetime='2015-06-11T18:29:20+08:00') Last week
                  a.d-flex.justify-content-between(href='javascript:void(0)')
                    .media.d-flex.align-items-start
                      .media-left
                        i.feather.icon-file.font-medium-5.warning
                      .media-body
                        h6.warning.media-heading Generate monthly report
                        small.notification-text Chocolate cake oat cake tiramisu marzipan
                      small
                        time.media-meta(datetime='2015-06-11T18:29:20+08:00') Last month
                li.dropdown-menu-footer
                  a.dropdown-item.p-1.text-center(href='javascript:void(0)') View all notifications
            li.dropdown.dropdown-user.nav-item
              a.dropdown-toggle.nav-link.dropdown-user-link(href='#', data-toggle='dropdown')
                .user-nav.d-sm-flex.d-none
                  span.user-name.text-bold-600 HUSSEIN GOM3A
                  span.user-status KALEMNE ANA MWGOOD
                span
                  img.round(src='/app-assets/images/portrait/small/avatar-s-11.jpg', alt='avatar', height='40', width='40')
              .dropdown-menu.dropdown-menu-right
                a.dropdown-item(href='page-user-profile.html')
                  i.feather.icon-user
                  |  Edit Profile
                a.dropdown-item(href='app-email.html')
                  i.feather.icon-mail
                  |  My Inbox
                a.dropdown-item(href='app-todo.html')
                  i.feather.icon-check-square
                  |  Task
                a.dropdown-item(href='app-chat.html')
                  i.feather.icon-message-square
                  |  Chats
                .dropdown-divider
                a.dropdown-item(href='auth-login.html')
                  i.feather.icon-power
                  |  Logout
  ul.main-search-list-defaultlist.d-none
    li.d-flex.align-items-center
      a.pb-25(href='#')
        h6.text-primary.mb-0 Files
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.w-100(href='#')
        .d-flex
          .mr-50
            img(src='/app-assets/images/icons/xls.png', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Two new item submitted
            small.text-muted Marketing Manager
        small.search-data-size.mr-50.text-muted '17kb
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.w-100(href='#')
        .d-flex
          .mr-50
            img(src='/app-assets/images/icons/jpg.png', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 52 JPG file Generated
            small.text-muted FontEnd Developer
        small.search-data-size.mr-50.text-muted '11kb
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.w-100(href='#')
        .d-flex
          .mr-50
            img(src='/app-assets/images/icons/pdf.png', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 25 PDF File Uploaded
            small.text-muted Digital Marketing Manager
        small.search-data-size.mr-50.text-muted '150kb
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.w-100(href='#')
        .d-flex
          .mr-50
            img(src='/app-assets/images/icons/doc.png', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Anna_Strong.doc
            small.text-muted Web Designer
        small.search-data-size.mr-50.text-muted '256kb
    li.d-flex.align-items-center
      a.pb-25(href='#')
        h6.text-primary.mb-0 Members
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.py-50.w-100(href='#')
        .d-flex.align-items-center
          .avatar.mr-50
            img(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Mahmoud Sherif
            small.text-muted UI designer
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.py-50.w-100(href='#')
        .d-flex.align-items-center
          .avatar.mr-50
            img(src='/app-assets/images/portrait/small/avatar-s-1.jpg', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Michal Clark
            small.text-muted FontEnd Developer
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.py-50.w-100(href='#')
        .d-flex.align-items-center
          .avatar.mr-50
            img(src='/app-assets/images/portrait/small/avatar-s-14.jpg', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Milena Gibson
            small.text-muted Digital Marketing Manager
    li.auto-suggestion.d-flex.align-items-center.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.py-50.w-100(href='#')
        .d-flex.align-items-center
          .avatar.mr-50
            img(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='png', height='32')
          .search-data
            p.search-data-title.mb-0 Anna Strong
            small.text-muted Web Designer
  ul.main-search-list-defaultlist-other-list.d-none
    li.auto-suggestion.d-flex.align-items-center.justify-content-between.cursor-pointer
      a.d-flex.align-items-center.justify-content-between.w-100.py-50
        .d-flex.justify-content-start
          span.mr-75.feather.icon-alert-circle
          span No results found.
  // END: Header

</template>

