<template>
    <h1> Welcome to TEST </h1>
</template>

<script>

import { createUser } from '~/graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify'



export default {
    mounted() {

        const user_id = this.$store.state.auth.user.username;
        const current_date = Date.now();

        const userDetails = {
            input: {
                id: user_id,
                created_timestamp: current_date,
                updated_timestamp: current_date,
                timezone: "WHATEVEVER",
                user_group: "EMPLOYEE",
                email: "msmfwat@hotmail.com",

            }        
        };



        (async () => {


            const newUser = await API.graphql(graphqlOperation(createUser, userDetails ));

            console.log(newUser);

            // console.log(this.$store.state.auth.user.username)

        })();


    }
}
</script>