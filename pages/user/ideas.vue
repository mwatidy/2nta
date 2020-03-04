<template lang="pug">
div.content-wrapper
    .content-header.row
        .content-header-left.col-md-9.col-12.mb-2
            .row.breadcrumbs-top
                .col-12
                    h2.content-header-title.float-left.mb-0 AFKARAK
                                
        .content-header-right.text-md-right.col-md-3.col-12.d-md-block.d-none
            .form-group.breadcrum-right
                .dropdown
                    button.btn-icon.btn.btn-primary.btn-round.btn-sm.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
                        i.feather.icon-share
                    .dropdown-menu.dropdown-menu-right
                        //a.dropdown-item(href='#') Calendar
    .content-body
        //  Data list view starts 
        section#data-thumb-view.data-thumb-view-header
            .action-btns.d-none
                .btn-dropdown.mr-1.mb-1
                    .btn-group.dropdown.actions-dropodown
                        button.btn.btn-white.px-1.py-1.dropdown-toggle.waves-effect.waves-light(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false').
                            
                            TA3DEL
                            
                        .dropdown-menu.dropdown-menu-right
                            a.dropdown-item(href='#')
                                i.feather.icon-trash
                                | MAS7
                            a.dropdown-item(href='#')
                                i.feather.icon-archive
                                | ARCHEF
                            a.dropdown-item(href='#')
                                i.feather.icon-file
                                | ETBA3
            //  dataTable starts 
            .table-responsive
                table.table.data-thumb-view
                    thead
                        tr
                            th
                            th SORA
                            th 3ENWAN
                            th TASNEEF
                            th GAHZA
                            th EL7ALA
                            th MOSHAHDAT
                            th TA3DEL
                    tbody
                        tr
                            td
                            td.product-img
                                img(src='/app-assets/images/elements/apple-watch.png', alt='Img placeholder')
                            td.product-name ELSa3a elzakeya
                            td.product-category Technology
                            td
                                .progress.progress-bar-success
                                    .progress-bar(role='progressbar', aria-valuenow='20', aria-valuemin='40', aria-valuemax='100', style='width:30%')
                            td
                                .chip.chip-warning
                                    .chip-body
                                        .chip-text Mbda2eya
                            td.product-price 80
                            td.product-action
                                span.action-edit
                                    i.feather.icon-edit
                                span.action-delete
                                    i.feather.icon-trash

            //  dataTable ends 
        //  Data list view end 
    //  END: Content
    .sidenav-overlay
    .drag-target



</template>

<script>
export default {
    head() {
        return {

        title: "2fkarak 2nta",
        script: [
            { src: "/app-assets/vendors/js/extensions/dropzone.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/datatables.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/buttons.bootstrap.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/dataTables.select.min.js", body: true, defer: true },
            { src: "/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js", body: true, defer: true },
            { src: "/app-assets/js/scripts/ui/data-list-view.js", body: true, defer: true },

        ],
        link: [
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/file-uploaders/dropzone.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/tables/datatable/datatables.min.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/css/plugins/file-uploaders/dropzone.css"
        },
        {
            "rel": "stylesheet",
            "type": "text/css",
            "href": "/app-assets/css/pages/data-list-view.css"
        }
    ]
    }
    }   
}
</script>