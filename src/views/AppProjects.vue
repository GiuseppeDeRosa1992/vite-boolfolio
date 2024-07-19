<script>
import ProjectCard from '../components/ProjectCard.vue';
import store from '../data/store.js';

export default {

    name: "AppProjects",

    components: {
        ProjectCard
    },



    data() {
        return {
            title: "Ciao questa è la projects",
            store,
        }
    },
};

</script>

<template>
    <section>
        <h1 class="text-white">{{ title }}</h1>
        <!-- RICHIAMO LE CARD DEI PROGETTI E TRAMITE LE PROPS GLI PASSO LA API CHE MI SERVE -->
        <ProjectCard :cardProjects="store.projects.data" :api_url="store.api_url" />
    </section>
</template>

<style scoped></style>