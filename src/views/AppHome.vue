<script>

import store from "../data/store.js";



export default {

    name: "AppHome",

    components: {
    },

    data() {
        return {
            title: "Ciao questa è la home",
            store,
        }
    },
};

</script>

<template>
    <h1 class="text-white text-center m-0 py-2">
        {{ title }}
    </h1>
</template>

<style scoped></style>