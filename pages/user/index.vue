<template lang="pug">
.content-wrapper
    .content-header.row        
    .content-body
        //  Dashboard Analytics Start 
        section#dashboard-analytics
            .row.match-height
                .col-lg-3.col-md-6.col-12
                    .card
                        .card-header.d-flex.flex-column.align-items-start.pb-0
                            .avatar.bg-rgba-primary.p-50.m-0
                                .avatar-content
                                    i.feather.icon-users.text-primary.font-medium-5
                            h2.text-bold-700.mt-1.mb-25 1k
                            p.mb-1 Moshahadat Afrad
                        .card-content.mt-1
                            #subscribe-gain-chart
                .col-lg-3.col-md-6.col-12
                    .card
                        .card-header.d-flex.flex-column.align-items-start.pb-0
                            .avatar.bg-rgba-warning.p-50.m-0
                                .avatar-content
                                    i.feather.icon-eye.text-warning.font-medium-5
                            h2.text-bold-700.mt-1.mb-25 500
                            p.mb-1 Moshahadat Sharekat
                        .card-content.mt-1
                            #orders-received-chart
                .col-md-6.col-12
                    .card
                        .card-content
                            .card-body
                                .row
                                    .col-lg-6.col-12.d-flex.justify-content-between.flex-column.order-lg-1.order-2.mt-lg-0.mt-2
                                        div
                                            h2.text-bold-700.mb-25 2.7K
                                            p.text-bold-500.mb-75 Moshahadat Afkar 
                                            h5.font-medium-2
                                                span.text-success +5.2% 
                                                span vs last 7 days
                                        a.btn.btn-primary.shadow(href='#')
                                            | View Details 
                                            i.feather.icon-chevrons-right
                                    .col-lg-6.col-12.d-flex.justify-content-between.flex-column.text-right.order-lg-2.order-1
                                        .dropdown.chart-dropdown
                                            button.btn.btn-sm.border-0.dropdown-toggle.p-0#dropdownItem5(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false').
                                                
                                                Last 7 Days
                                                
                                            .dropdown-menu.dropdown-menu-right(aria-labelledby='dropdownItem5')
                                                a.dropdown-item(href='#') Last 28 Days
                                                a.dropdown-item(href='#') Last Month
                                                a.dropdown-item(href='#') Last Year
                                        #avg-session-chart
            .row
                .col-12
                    .card
                        .card-header
                            h4.mb-0 Waza2f Gdeda
                        .card-content
                            .table-responsive.mt-1
                                table.table.table-hover-animation.mb-0
                                    thead
                                        tr
                                            th WAZEFA
                                            th SHAREKA
                                            th MKAN
                                            th TAREE5
                                            th AL7ALA
                                            th QARAR
                                    tbody
                                        tr
                                            td Modeer Tasweeq Elektrone
                                            td 
                                                img.media-object.rounded-circle(src='https://image-us.samsung.com/SamsungUS/home/samsung-logo-191-1.jpg', alt='Avatar', height='30', width='30') 
                                                | &nbsp; Samsung
                                            td Madint Nasr
                                            td 03 / 03 / 2020
                                            td
                                                i.fa.fa-circle.font-small-3.text-success.mr-50
                                                | Mota7ah
                                            td
                                                i.fa.fa-times.font-small-3.mr-50.text-danger
                                                i.fa.fa-check.font-small-3.mr-50.text-success

            .row
                .col-12.col-md-6(v-for="post in posts")
                    .card
                        .card-body
                            .d-flex.justify-content-start.align-items-center.mb-1
                                .avatar.mr-1
                                    img(src='~/assets/images/profile/user-uploads/user-01.jpg', alt='avtar img holder', height='45', width='45')
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
                                            img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-5.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Elicia Rieske')
                                            img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Julee Rossignol')
                                            img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-10.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Darcey Nooner')
                                            img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                        li.avatar.pull-up(data-toggle='tooltip', data-popup='tooltip-custom', data-placement='bottom', data-original-title='Elicia Rieske')
                                            img.media-object.rounded-circle(src='~/assets/images/portrait/small/avatar-s-7.jpg', alt='Avatar', height='30', width='30')
                                        li.d-inline-block.pl-50
                                            span +264 more
                                p.ml-auto.d-flex.align-items-center
                                    i.feather.icon-message-square.font-medium-2.mr-50
                                    | 98

                            .d-flex.justify-content-start.align-items-center.mb-1
                                .avatar.mr-50
                                    img(src='~/assets/images/portrait/small/avatar-s-8.jpg', alt='Avatar', height='30', width='30')
                                .user-page-info
                                    h6.mb-0 Darcey Nooner
                                    span.font-small-2 I love cupcake danish jujubes sweet.
                                .ml-auto.cursor-pointer
                                    i.feather.icon-heart.mr-50
                                    i.feather.icon-message-square
                            .d-flex.justify-content-start.align-items-center.mb-2
                                .avatar.mr-50
                                    img(src='~/assets/images/portrait/small/avatar-s-6.jpg', alt='Avatar', height='30', width='30')
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

</template>

<script>

export default {
    layout: 'default',
    data() {
        return {
            posts: [0,0,0,0,0,0,0,0,0,0,0,0,0],
        }
    },
    head: {
        script: [
            { src: '/app-assets/js/scripts/pages/dashboard-analytics.js', body: true, defer: true }
        ]
    }


}
</script>

<style scoped>
.padding-adjust { 
    padding: 1.5rem;
}
</style>