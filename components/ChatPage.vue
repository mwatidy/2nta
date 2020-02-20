<template lang="pug">
div.content-area-wrapper
    .sidebar-left
        .sidebar
            //  User Chat profile area 
            .chat-profile-sidebar
                header.chat-profile-header    
                    span.close-icon
                        i.feather.icon-x
                    .header-profile-sidebar
                        .avatar
                            img(src='~/assets/images/portrait/small/avatar-s-11.jpg', alt='user_avatar', height='70', width='70')
                            span.avatar-status-online.avatar-status-lg
                        h4.chat-user-name John Doe
                .profile-sidebar-area
                    .scroll-area
                        h6 About
                        .about-user
                            fieldset.mb-0
                                textarea.form-control.char-textarea#textarea-counter(data-length='120', rows='5', placeholder='About User') Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.
                            small.counter-value.float-right
                                span.char-count 108
                                |  / 120 
                        h6.mt-3 Status
                        ul.list-unstyled.user-status.mb-0
                            li.pb-50
                                fieldset
                                    .vs-radio-con.vs-radio-success
                                        input(type='radio', name='userStatus', value='online', checked)
                                        span.vs-radio
                                            span.vs-radio--border
                                            span.vs-radio--circle
                                        span Active
                            li.pb-50
                                fieldset
                                    .vs-radio-con.vs-radio-danger
                                        input(type='radio', name='userStatus', value='busy')
                                        span.vs-radio
                                            span.vs-radio--border
                                            span.vs-radio--circle
                                        span Do Not Disturb
                            li.pb-50
                                fieldset
                                    .vs-radio-con.vs-radio-warning
                                        input(type='radio', name='userStatus', value='away')
                                        span.vs-radio
                                            span.vs-radio--border
                                            span.vs-radio--circle
                                        span Away
                            li.pb-50
                                fieldset
                                    .vs-radio-con.vs-radio-secondary
                                        input(type='radio', name='userStatus', value='offline')
                                        span.vs-radio
                                            span.vs-radio--border
                                            span.vs-radio--circle
                                        span Offline
            // / User Chat profile area 
            //  Chat Sidebar area 
            .sidebar-content.card
                span.sidebar-close-icon
                    i.feather.icon-x
                .chat-fixed-search
                    .d-flex.align-items-center
                        .sidebar-profile-toggle.position-relative.d-inline-flex
                            .avatar
                                img(src='~/assets/images/portrait/small/avatar-s-11.jpg', alt='user_avatar', height='40', width='40')
                                span.avatar-status-online
                            .bullet-success.bullet-sm.position-absolute
                        fieldset.form-group.position-relative.has-icon-left.mx-1.my-0.w-100
                            input.form-control.round#chat-search(type='text', placeholder='Search or start a new chat')
                            .form-control-position
                                i.feather.icon-search
                #users-list.chat-user-list.list-group.position-relative
                    h3.primary.p-1.mb-0 Chats
                    ul.chat-users-list-wrapper.media-list
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-3.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Elizabeth Elliott
                                    p.truncate Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing
                                .contact-meta
                                    span.float-right.mb-25 4:14 PM
                                    span.badge.badge-primary.badge-pill.float-right 3
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Kristopher Candy
                                    p.truncate Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing
                                .contact-meta
                                    span.float-right.mb-25 9:09 AM
                    h3.primary.p-1.mb-0 Contacts
                    ul.chat-users-list-wrapper.media-list
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-8.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Sarah Woods
                                    p.truncate Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Jenny Perich
                                    p.truncate Tart dragée carrot cake chocolate bar. Chocolate cake jelly beans caramels tootsie roll candy canes.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-5.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Sarah Montgomery
                                    p.truncate Tootsie roll sesame snaps biscuit icing jelly-o biscuit chupa chups powder.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-9.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Heather Howell
                                    p.truncate Tart cookie dragée sesame snaps halvah. Fruitcake sugar plum gummies cheesecake toffee.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Kelly Reyes
                                    p.truncate Wafer toffee tart jelly cake croissant chocolate bar cupcake donut. Fruitcake gingerbread tiramisu sweet jelly-o.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-14.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Vincent Nelson
                                    p.truncate Toffee gummi bears sugar plum gummi bears chocolate bar donut. Pudding cookie lemon drops icing
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-3.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Elizabeth Elliott
                                    p.truncate Candy canes ice cream jelly beans carrot cake chocolate bar pastry candy jelly-o.
                                .contact-meta
                                    span.float-right.mb-25
                        li
                            .pr-1
                                span.avatar.m-0.avatar-md
                                    img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', height='42', width='42', alt='Generic placeholder image')
                                    i
                            .user-chat-info
                                .contact-info
                                    h5.font-weight-bold.mb-0 Kristopher Candy
                                    p.truncate Marzipan bonbon chocolate bar biscuit lemon drops muffin jelly-o sweet jujubes.
                                .contact-meta
                                    span.float-right.mb-25
            // / Chat Sidebar area 
    .content-right
        .content-wrapper
            .content-header.row
            .content-body
                .chat-overlay
                section.chat-app-window
                    .start-chat-area
                        span.mb-1.start-chat-icon.feather.icon-message-square
                        h4.py-50.px-1.sidebar-toggle.start-chat-text Start Conversation
                    .active-chat.d-none
                        .chat_navbar
                            header.chat_header.d-flex.justify-content-between.align-items-center.p-1
                                .vs-con-items.d-flex.align-items-center
                                    .sidebar-toggle.d-block.d-lg-none.mr-1
                                        i.feather.icon-menu.font-large-1
                                    .avatar.user-profile-toggle.m-0.m-0.mr-1
                                        img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt, height='40', width='40')
                                        span.avatar-status-busy
                                    h6.mb-0 Felecia Rower
                                span.favorite
                                    i.feather.icon-star.font-medium-5
                        .user-chats
                            .chats
                                .chat
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='right', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p How can we help? We're here for you!
                                .chat.chat-left
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='left', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-7.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p Hey John, I am looking for the best admin template.
                                            p Could you please help me to find it out?
                                        .chat-content
                                            p It should be Bootstrap 4 compatible.
                                .divider
                                    .divider-text Yesterday
                                .chat
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='right', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p Absolutely!
                                        .chat-content
                                            p Vuexy admin is the responsive bootstrap 4 admin template.
                                .chat.chat-left
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='left', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-7.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p Looks clean and fresh UI.
                                        .chat-content
                                            p It's perfect for my next project.
                                        .chat-content
                                            p How can I purchase it?
                                .chat
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='right', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p Thanks, from ThemeForest.
                                .chat.chat-left
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='left', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-7.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p I will purchase it for sure.
                                        .chat-content
                                            p Thanks.
                                .chat
                                    .chat-avatar
                                        a.avatar.m-0(data-toggle='tooltip', href='#', data-placement='right', data-original-title)
                                            img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt='avatar', height='40', width='40')
                                    .chat-body
                                        .chat-content
                                            p Great, Feel free to get in touch on
                                        .chat-content
                                            p https://pixinvent.ticksy.com/
                        .chat-app-form
                            form.chat-app-input.d-flex(onsubmit='enter_chat();', action='javascript:void(0);')
                                input.form-control.message.mr-1.ml-50#iconLeft4-1(type='text', placeholder='Type your message')
                                button.btn.btn-primary.send(type='button', onclick='enter_chat();')
                                    i.fa.fa-paper-plane-o.d-lg-none
                                    |  
                                    span.d-none.d-lg-block Send
                //  User Chat profile right area 
                .user-profile-sidebar
                    header.user-profile-header
                        span.close-icon
                            i.feather.icon-x
                        .header-profile-sidebar
                            .avatar
                                img(src='~/assets/images/portrait/small/avatar-s-1.jpg', alt='user_avatar', height='70', width='70')
                                span.avatar-status-busy.avatar-status-lg
                            h4.chat-user-name Felecia Rower
                    .user-profile-sidebar-area.p-2
                        h6 About
                        p Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.
                // / User Chat profile right area 

</template>

<script>
export default {
    head: {
        link: [
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/css/pages/app-chat.css' }
        ],
        script: [
            { src: '/app-assets/js/scripts/pages/app-chat.js', body: true, defer: true }
        ],
        bodyAttrs: {
            class: "vertical-layout vertical-menu-modern content-left-sidebar chat-application navbar-floating footer-static",
            'data-open': 'click', 
            'data-menu':'vertical-menu-modern', 
            'data-col': 'content-left-sidebar'
        }
    },
}

</script>