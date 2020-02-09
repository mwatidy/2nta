<template lang="pug">
div
  .main-menu.menu-fixed.menu-light.menu-accordion.menu-shadow.expanded(data-scroll-to-active='true')
    .navbar-header
      ul.nav.navbar-nav.flex-row
        li.nav-item.mr-auto
          a.navbar-brand(href='/html/ltr/vertical-collapsed-menu-template/index.html')
            .brand-logo
            h2.brand-text.mb-0 2NTA
        li.nav-item.nav-toggle
          a.nav-link.modern-nav-toggle.pr-0.shepherd-modal-target(data-toggle='collapse')
            i.icon-x.d-block.d-xl-none.font-medium-4.primary.toggle-icon.feather.icon-disc
            i.toggle-icon.icon-disc.font-medium-4.d-none.d-xl-block.collapse-toggle-icon.primary.feather(data-ticon='icon-disc', tabindex="0")
    .shadow-bottom
    .main-menu-content
      ul.navigation.navigation-main#main-menu-navigation(data-menu='menu-navigation')
        li.nav-item
          a(href='index.html')
            i.feather.icon-map
            span.menu-title(data-i18n='Dashboard') ELKHETA
            span.badge.badge.badge-warning.badge-pill.float-right.mr-2
              | 2
        li.navigation-header
          span 2NTA
        li.nav-item
          a(href='#')
            i.feather.icon-anchor
            span.menu-title(data-i18n='Email') AFKARK
        li.nav-item
          a(href='#')
            i.feather.icon-briefcase
            span.menu-title(data-i18n='Email') MASHARE3AK
        li.nav-item
          a(href='#')
            i.feather.icon-check-square
            span.menu-title(data-i18n='Email') MWAZAFENAK
        li.navigation-header
          span ELMOGTAMA3
        li.nav-item
          a(href='#')
            i.feather.icon-anchor
            span.menu-title(data-i18n='Email') NAS
        li.nav-item
          a(href='#')
            i.feather.icon-briefcase
            span.menu-title(data-i18n='Email') AFKAR
        li.nav-item
          a(href='#')
            i.feather.icon-check-square
            span.menu-title(data-i18n='Email') MASHARE3

</template>


