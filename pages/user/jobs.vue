<template>
    <JobsPage :jobs="jobs" />
</template>

<script>

import JobsPage from "~/components/JobsPage"

export default {
    layout: "default",
    components: { JobsPage },
    data() {
        return {
            jobs: [
                { name: "Tasweeq Elektrone", position: "Modeer", date: "20/01/2020", status: "moqabalat", salary: "20,000 EGP" },
                { name: "Tasweeq Elektrone", position: "Modeer", date: "20/01/2020", status: "moqabalat", salary: "20,000 EGP" },
                { name: "Tasweeq Elektrone", position: "Modeer", date: "20/01/2020", status: "moqabalat", salary: "20,000 EGP" },
            ]
        }
    }
}
</script>

<style scoped>
    .actions.action-btns .btn.btn-outline-primary {
         visibility: hidden; 
    }

</style>