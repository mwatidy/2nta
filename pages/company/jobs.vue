<template>
    <JobsPage :jobs="jobs" />
</template>

<script>

import JobsPage from "~/components/Jobs"

export default {
    layout: "defaultCompany",
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