<template lang="pug">

.app-content.content
    .content-overlay
    .header-navbar-shadow
    .content-wrapper
        .content-header.row. 
        .content-body
            //  coming soon flat design 
            nuxt
</template>

<script>
export default {
    head: {
        link: [
            
        ],
        script: [ 
        ],
        bodyAttrs: { 
            class: 'vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page blank-page',
            "data-open": 'click', 
            "data-menu": 'vertical-menu-modern', 
            "data-col": '1-column'
        }
    },
}
</script>