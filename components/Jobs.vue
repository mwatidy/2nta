<template lang="pug">
.content-wrapper
    .content-header.row
        .content-header-left.col-md-9.col-12.mb-2
            .row.breadcrumbs-top
                .col-12
                    h2.content-header-title.float-left.mb-0 Waza2f
                                
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
        //  Data list view starts 
        section#data-list-view.data-list-view-header
            .action-btns.d-none
                .btn-dropdown.mr-1.mb-1
                    .btn-group.dropdown.actions-dropodown
                        button.btn.btn-white.px-1.py-1.dropdown-toggle.waves-effect.waves-light(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false').
                            
                            TA3DEL
                            
                        .dropdown-menu
                            a.dropdown-item(href='#')
                                i.feather.icon-trash
                                | Delete
                            a.dropdown-item(href='#')
                                i.feather.icon-archive
                                | Archive
                            a.dropdown-item(href='#')
                                i.feather.icon-file
                                | Print
                            a.dropdown-item(href='#')
                                i.feather.icon-save
                                | Another Action
            //  DataTable starts 
            .table-responsive
                table.table.data-list-view
                    thead
                        tr
                            th
                            th WAZEFA
                            th ELMAR7ALA
                            th TAREE5
                            th EL7ALA
                            th MORATB
                            th TA3DEL
                    tbody
                        tr(v-for="job in jobs", onclick='window.location = window.location.href.replace(\'/jobs\', \'/job\')')
                            td
                            td.product-name {{ job.name }}
                            td {{ job.position }}
                            td {{ job.date }}
                            td
                                .chip.chip-warning
                                    .chip-body
                                        .chip-text {{ job.status }}
                            td.product-price {{ job.salary }}
                            td.product-action
                                span.action-edit
                                    i.feather.icon-edit
                                span.action-delete
                                    i.feather.icon-trash
</template>

<script>
export default {
     props: {
            jobs: Array,
        },
    head: {
        link: [
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/vendors/css/tables/datatable/datatables.min.css' },
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/vendors/css/file-uploaders/dropzone.min.css' },
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css' },
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/css/plugins/file-uploaders/dropzone.css' },
            { rel: 'stylesheet', type:'text/css', href:'/app-assets/css/pages/data-list-view.css' },
        ],
        script: [

            { src: '/app-assets/vendors/js/extensions/dropzone.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/datatables.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/dataTables.select.min.js', body: true, defer: true },
            { src: '/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js', body: true, defer: true },
            { src: '/app-assets/js/scripts/ui/data-list-view.js', body: true, defer: true },

        ],
        bodyAttrs: {
            class: "vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static",
            'data-open': 'click', 
            'data-menu':'vertical-menu-modern', 
            'data-col': '2-columns'
        }
    },
}

</script>