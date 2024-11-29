<script>
import ProjectCard from '../components/ProjectCard.vue';
import store from '../data/store.js';
import axios from 'axios';

export default {

    name: "AppProjects",

    components: {
        ProjectCard
    },



    data() {
        return {
            // title: "Ciao questa è la projects",
            store,
        }
    },

    mounted() {
        //POPOLO TRAMITE CHIAMATA AXIOS LA VARIABILE PROJECTS
        axios.get(`${this.store.api_url}/api/projects`).then(result => {

            this.store.projects = result.data.projects
        })
    },
};

</script>

<template>
    <section>
        <!-- <h1 class="text-white">{{ title }}</h1> -->
        <!-- RICHIAMO LE CARD DEI PROGETTI E TRAMITE LE PROPS GLI PASSO LA API CHE MI SERVE -->
        <ProjectCard :cardProjects="store.projects.data" :api_url="store.api_url" />
        <!-- props nuova store.projectsBoolean -->
    </section>
</template>

<style scoped></style>