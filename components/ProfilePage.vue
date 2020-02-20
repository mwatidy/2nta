<template lang="pug">
div.content-wrapper
    .content-header.row
        .content-header-left.col-md-9.col-12.mb-2
            .row.breadcrumbs-top
                .col-12
                    h2.content-header-title.float-left.mb-0 Profile
                    .breadcrumb-wrapper.col-12
                        ol.breadcrumb
                            li.breadcrumb-item
                                a(href='index.html') Home
                            li.breadcrumb-item
                                a(href='#') Pages
                            li.breadcrumb-item.active.
                                Profile
                                
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
        #user-profile
            .row
                .col-12
                    .profile-header.mb-2
                        .relative
                            .cover-container
                                img.img-fluid.bg-cover.rounded-0.w-100(src='/app-assets/images/profile/user-uploads/cover.jpg', alt='User Profile Image')
                            .profile-img-container.d-flex.align-items-center.justify-content-between
                                img.rounded-circle.img-border.box-shadow-1(src='/app-assets/images/profile/user-uploads/user-13.jpg', alt='Card image')
                                .float-right
                                    button.btn.btn-icon.btn-icon.rounded-circle.btn-primary.mr-1(type='button')
                                        i.feather.icon-edit-2
                                    button.btn.btn-icon.btn-icon.rounded-circle.btn-primary(type='button')
                                        i.feather.icon-settings
                        .d-flex.justify-content-end.align-items-center.profile-header-nav
                            nav.navbar.navbar-expand-sm.w-100.pr-0
                                button.navbar-toggler.pr-0(type='button', data-toggle='collapse', data-target='navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
                                    span.navbar-toggler-icon
                                        i.feather.icon-align-justify
                                .collapse.navbar-collapse#navbarSupportedContent
                                    ul.navbar-nav.justify-content-around.w-75.ml-sm-auto
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') Timeline
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') About
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') Photos
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') Friends
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') Videos
                                        li.nav-item.px-sm-0
                                            a.nav-link.font-small-3(href='#') Events
            section#profile-info
                .row
                    .col-lg-3.col-12
                        .card
                            .card-header
                                h4 About
                                i.feather.icon-more-horizontal.cursor-pointer
                            .card-body
                                p Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.
                                .mt-1
                                    h6.mb-0 Joined:
                                    p November 15, 2015
                                .mt-1
                                    h6.mb-0 Lives:
                                    p New York, USA
                                .mt-1
                                    h6.mb-0 Email:
                                    p bucketful@fiendhead.org
                                .mt-1
                                    h6.mb-0 Website:
                                    p www.pixinvent.com
                                .mt-1
                                    button.btn.btn-sm.btn-icon.btn-primary.mr-25.p-25(type='button')
                                        i.feather.icon-facebook
                                    button.btn.btn-sm.btn-icon.btn-primary.mr-25.p-25(type='button')
                                        i.feather.icon-twitter
                                    button.btn.btn-sm.btn-icon.btn-primary.p-25(type='button')
                                        i.feather.icon-instagram
                        .card
                            .card-header
                                h4.card-title Suggested Pages
                            .card-body.suggested-block
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-09.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p Rockose
                                        span.font-small-2 Company
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-08.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p The Devil's
                                        span.font-small-2 Clothing Store
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-1
                                        img(src='/app-assets/images/profile/pages/page-03.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p The Magician
                                        span.font-small-2 Public Figure
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-02.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p AC/DC
                                        span.font-small-2 Music
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-07.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p Eat Hard
                                        span.font-small-2 Restaurant / Bar
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-04.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p B4B
                                        span.font-small-2 Beauty Store
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-05.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p Kylie Jenner
                                        span.font-small-2 Public Figure
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-01.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p RDJ
                                        span.font-small-2 Actor
                                    .ml-auto
                                        i.feather.icon-star
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/profile/pages/page-06.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        p Taylor Swift
                                        span.font-small-2 Music
                                    .ml-auto
                                        i.feather.icon-star
                        .card
                            .card-header
                                h4 Twitter Feeds
                            .card-body
                                .twitter-feed
                                    .d-flex.justify-content-start.align-items-center.mb-1
                                        .avatar.mr-50
                                            img(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='avtar img holder', height='35', width='35')
                                        .user-page-info
                                            p.text-bold-600.mb-0 Tiana Vercetti
                                            small @tiana59
                                            .badge.badge-primary.badge-pill.badge-sm.p-0
                                                i.feather.icon-check.font-small-1
                                    p.mb-0 I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.
                                    p.text-primary #js #vuejs
                                    small 12 Dec 2018
                                .twitter-feed.mt-2
                                    .d-flex.justify-content-start.align-items-center.mb-1
                                        .avatar.mr-50
                                            img(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='avtar img holder', height='35', width='35')
                                        .user-page-info
                                            p.text-bold-600.mb-0 Tiana Vercetti
                                            small @tiana59
                                            .badge.badge-primary.badge-pill.badge-sm.p-0
                                                i.feather.icon-check.font-small-1
                                    p.mb-0 Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.
                                    p.text-primary #python
                                    small 11 Dec 2018
                                .twitter-feed.mt-2
                                    .d-flex.justify-content-start.align-items-center.mb-1
                                        .avatar.mr-50
                                            img(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='avtar img holder', height='35', width='35')
                                        .user-page-info
                                            p.text-bold-600.mb-0 Tiana Vercetti
                                            small @tiana59
                                            .badge.badge-primary.badge-pill.badge-sm.p-0
                                                i.feather.icon-check.font-small-1
                                    p.mb-0 I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.
                                    small 10 Dec 2018
                                .twitter-feed.mt-2
                                    .d-flex.justify-content-start.align-items-center.mb-1
                                        .avatar.mr-50
                                            img(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='avtar img holder', height='35', width='35')
                                        .user-page-info
                                            p.text-bold-600.mb-0 Tiana Vercetti
                                            small @tiana59
                                            .badge.badge-primary.badge-pill.badge-sm.p-0
                                                i.feather.icon-check.font-small-1
                                    p.mb-0 Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.
                                    p.text-primary #django #vuejs
                                    small 9 Dec 018
                    .col-lg-6.col-12
                        .card
                            .card-body
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-1
                                        img(src='/app-assets/images/profile/user-uploads/user-01.jpg', alt='avtar img holder', height='45', width='45')
                                    .user-page-info
                                        p.mb-0 Leeanna Alvord
                                        span.font-small-2 12 Dec 2018 at 1:16 AM
                                    .ml-auto.user-like.text-danger
                                        i.fa.fa-heart
                                p I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.
                                img.img-fluid.card-img-top.rounded-sm.mb-2(src='/app-assets/images/profile/post-media/2.jpg', alt='avtar img holder')
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .d-flex.align-items-center
                                        i.feather.icon-heart.font-medium-2.mr-50
                                        span 145
                                    .ml-2
                                        ul.list-unstyled.users-list.m-0.d-flex.align-items-center
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Trina Lynes')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-1.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Lilian Nenez')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-2.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Alberto Glotzbach')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-3.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='George Nordic')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-5.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Vinnie Mostowy')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-4.jpg', alt='Avatar', height='30', width='30')
                                            li.d-inline-block.pl-50
                                                span +140 more
                                    p.ml-auto.d-flex.align-items-center
                                        i.feather.icon-message-square.font-medium-2.mr-50
                                        | 77

                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Kitty Allanson
                                        span.font-small-2 orthoplumbate morningtide naphthaline exarteritis
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                .d-flex.justify-content-start.align-items-center.mb-2
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Jeanie Bulgrin
                                        span.font-small-2 blockiness pandemy metaxylene speckle coppy
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                fieldset.form-label-group.mb-50
                                    textarea.form-control#label-textarea(rows='3', placeholder='Add Comment')
                                    label(for='label-textarea') Add Comment
                                button.btn.btn-sm.btn-primary(type='button') Post Comment
                        .card
                            .card-body
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-1
                                        img(src='/app-assets/images/profile/user-uploads/user-01.jpg', alt='avtar img holder', height='45', width='45')
                                    .user-page-info
                                        h6.mb-0 Leeanna Alvord
                                        span.font-small-2 11 Dec 2018 at 1:35 AM
                                    .ml-auto.user-like
                                        i.feather.icon-heart
                                p Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.
                                img.img-fluid.rounded-sm.mb-2(src='/app-assets/images/profile/post-media/25.jpg', alt='avtar img holder')
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .d-flex.align-items-center
                                        i.feather.icon-heart.font-medium-2.mr-50
                                        span 276
                                    .ml-2
                                        ul.list-unstyled.users-list.m-0.d-flex.align-items-center
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Lai Lewandowski')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Elicia Rieske')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-7.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Darcey Nooner')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Julee Rossignol')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-10.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Jeffrey Gerondale')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-9.jpg', alt='Avatar', height='30', width='30')
                                            li.d-inline-block.pl-50
                                                span +271 more
                                    p.ml-auto.d-flex.align-items-center
                                        i.feather.icon-message-square.font-medium-2.mr-50
                                        | 105

                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Darcey Nooner
                                        span.font-small-2 I love cupcake danish jujubes sweet.
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                .d-flex.justify-content-start.align-items-center.mb-2
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Lai Lewandowski
                                        span.font-small-2 Wafer I love brownie jelly bonbon tart apple pie
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                fieldset.form-label-group.mb-50
                                    textarea.form-control#label-textarea2(rows='3', placeholder='Add Comment')
                                    label(for='label-textarea2') Add Comment
                                button.btn.btn-sm.btn-primary(type='button') Post Comment
                        .card
                            .card-body
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-1
                                        img(src='/app-assets/images/profile/user-uploads/user-01.jpg', alt='avtar img holder', height='45', width='45')
                                    .user-page-info
                                        h6.mb-0 Leeanna Alvord
                                        span.font-small-2 10 Dec 2018 at 5:35 AM
                                    .ml-auto.user-like
                                        i.feather.icon-heart
                                p Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.
                                iframe.w-100.height-250(src='https://www.youtube.com/embed/WALZwXyxpHQ')
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .d-flex.cursor-pointeralign-items-center
                                        i.feather.icon-heart.font-medium-2.mr-50
                                        span 269
                                    .ml-2
                                        ul.list-unstyled.users-list.m-0.d-flex.align-items-center
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Vinnie Mostowy')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-5.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Elicia Rieske')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-7.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Julee Rossignol')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-10.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Darcey Nooner')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                            li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Elicia Rieske')
                                                img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-7.jpg', alt='Avatar', height='30', width='30')
                                            li.d-inline-block.pl-50
                                                span +264 more
                                    p.ml-auto.d-flex.align-items-center
                                        i.feather.icon-message-square.font-medium-2.mr-50
                                        | 98

                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Darcey Nooner
                                        span.font-small-2 I love cupcake danish jujubes sweet.
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                .d-flex.justify-content-start.align-items-center.mb-2
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
                                    .user-page-info
                                        h6.mb-0 Lai Lewandowski
                                        span.font-small-2 Wafer I love brownie jelly bonbon tart apple pie
                                    .ml-auto.cursor-pointer
                                        i.feather.icon-heart.mr-50
                                        i.feather.icon-message-square
                                fieldset.form-label-group.mb-50
                                    textarea.form-control#label-textarea3(rows='3', placeholder='Add Comment')
                                    label(for='label-textarea3') Add Comment
                                button.btn.btn-sm.btn-primary(type='button') Post Comment
                    .col-lg-3.col-12
                        .card
                            .card-header
                                h4 Latest Photos
                            .card-body
                                .row
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-01.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-02.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-03.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-04.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-05.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-06.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-07.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-08.jpg', alt='avtar img holder')
                                    .col-md-4.col-6.user-latest-img
                                        img.img-fluid.mb-1.rounded-sm(src='/app-assets/images/profile/user-uploads/user-09.jpg', alt='avtar img holder')
                        .card
                            .card-header.d-flex.justify-content-between
                                h4 Suggestions
                                i.feather.icon-more-horizontal.cursor-pointer
                            .card-body
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-5.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Carissa Dolle
                                        span.font-small-2 6 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Liliana Pecor
                                        span.font-small-2 3 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-7.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Isidra Strunk
                                        span.font-small-2 2 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Gerald Licea
                                        span.font-small-2 1 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-9.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Kelle Herrick
                                        span.font-small-2 1 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-10.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Cesar Lee
                                        span.font-small-2 1 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-1
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-11.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 John Doe
                                        span.font-small-2 1 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                .d-flex.justify-content-start.align-items-center.mb-2
                                    .avatar.mr-50
                                        img(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='avtar img holder', height='35', width='35')
                                    .user-page-info
                                        h6.mb-0 Tonia Seabold
                                        span.font-small-2 1 Mutual Friends
                                    button.btn.btn-primary.btn-icon.ml-auto(type='button')
                                        i.feather.icon-user-plus
                                button.btn.btn-primary.w-100.mt-1(type='button')
                                    i.feather.icon-plus.mr-25
                                    | Load More
                        .card
                            .card-header
                                h4 Polls
                            .card-body
                                h6 Who is the best actor in Marvel Cinematic Universe?
                                .polls-info.mt-1
                                    .d-flex.justify-content-between
                                        .vs-radio-con.vs-radio-primary
                                            input(type='radio', name='vueradio', value='false')
                                            span.vs-radio
                                                span.vs-radio--border
                                                span.vs-radio--circle
                                            span RDJ
                                        .text-right 58%
                                    .progress.progress-bar-primary.my-50
                                        .progress-bar(role='progressbar', aria-valuenow='58', aria-valuemin='58', aria-valuemax='100', style='width:58%')
                                    ul.list-unstyled.users-list.d-flex
                                        li.avatar.pull-up.ml-0(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Tonia Seabold')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Carissa Dolle')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-5.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Kelle Herrick')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-9.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Len Bregantini')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-10.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='John Doe')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-11.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Tonia Seabold')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-12.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Dirk Fornili')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-2.jpg', alt='Avatar', height='30', width='30')
                                .polls-info.mt-1
                                    .d-flex.justify-content-between
                                        .vs-radio-con.vs-radio-primary
                                            input(type='radio', name='vueradio', value='false')
                                            span.vs-radio
                                                span.vs-radio--border
                                                span.vs-radio--circle
                                            span Chris Hemswort
                                        .text-right 16%
                                    .progress.progress-bar-primary.my-50
                                        .progress-bar(role='progressbar', aria-valuenow='16', aria-valuemin='16', aria-valuemax='100', style='width:16%')
                                    ul.list-unstyled.users-list.d-flex
                                        li.avatar.pull-up.ml-0(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Liliana Pecor')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Kasandra NaleVanko')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-1.jpg', alt='Avatar', height='30', width='30')
                                .polls-info.mt-1
                                    .d-flex.justify-content-between
                                        .vs-radio-con.vs-radio-primary
                                            input(type='radio', name='vueradio', value='false')
                                            span.vs-radio
                                                span.vs-radio--border
                                                span.vs-radio--circle
                                            span Mark Ruffalo
                                        .text-right 8%
                                    .progress.progress-bar-primary.my-50
                                        .progress-bar(role='progressbar', aria-valuenow='8', aria-valuemin='8', aria-valuemax='100', style='width:8%')
                                    ul.list-unstyled.users-list.d-flex
                                        li.avatar.pull-up.ml-0(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Lorelei Lacsamana')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-4.jpg', alt='Avatar', height='30', width='30')
                                .polls-info.mt-1
                                    .d-flex.justify-content-between
                                        .vs-radio-con.vs-radio-primary
                                            input(type='radio', name='vueradio', value='false')
                                            span.vs-radio
                                                span.vs-radio--border
                                                span.vs-radio--circle
                                            span Chris Evans
                                        .text-right 16%
                                    .progress.progress-bar-primary.my-50
                                        .progress-bar(role='progressbar', aria-valuenow='16', aria-valuemin='16', aria-valuemax='100', style='width:16%')
                                    ul.list-unstyled.users-list.d-flex
                                        li.avatar.pull-up.ml-0(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='JeanieBulgrin')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Graig Muckey')
                                            img.media-object.rounded-circle(src='/app-assets/images/portrait/small/avatar-s-3.jpg', alt='Avatar', height='30', width='30')
                .row
                    .col-12.text-center
                        button.btn.btn-primary.block-element.mb-1(type='button') Load More

</template>

<script>
export default {
    head: {
        link: [
                { rel: 'stylesheet', href:"/app-assets/css/pages/users.css" }
            ],
        script: [
            { src: "/app-assets/js/scripts/pages/user-profile.js", body: true, defer: true  }
        ]        
    },

}
</script>