<script>

import store from "../data/store.js";
import axios from "axios";
import AppProfile from "../components/AppProfile.vue";
import AppFooter from "../components/AppFooter.vue";
import AppExperience from "../components/AppExperience.vue";
import AppTraining from "../components/AppTraining.vue";




export default {

    name: "AppHome",

    components: {
        AppProfile,
        AppFooter,
        AppExperience,
        AppTraining,
    },

    data() {
        return {
            title: "Ciao questa è la home",
            store,
        }
    },

    mounted() {
        //POPOLO TRAMITE CHIAMATA AXIOS LA VARIABILE PROJECTS
        axios.get(`${this.store.api_url}${this.store.latest}`).then(result => {

            this.store.latestProjects = result.data.projects
        })
    },
};

</script>

<template>

    <!-- SEZIONE PROFILO -->
    <AppProfile />

    <!-- SEZIONE CON ALCUNI PROGETTI -->
    <section class="project">
        <div class="container">
            <div class="row text-center" v-if="store.projects">
                <h2 class="m-0 pb-3 text-start fs-1">Alcuni Progetti</h2>
                <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
                <template v-for="project in store.latestProjects">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                        <div class="card p-0 h-100">
                            <h3 class="card-text py-3 m-0 fs-2">{{ project.title }}</h3>
                            <figure class="m-0">
                                <img :src="store.api_url + '/storage/' + project.img_preview"
                                    class="card-img-top img-fluid object-fit-contain" alt="" style="height: 15rem;">
                            </figure>
                            <a :href="project.link_git" target="_blank" rel="noopener noreferrer"
                                class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                            <div class="text-center py-2 transform">
                                <!-- importo il link per vedere i dettagli anche sui progetti nella home -->
                                <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <!-- SEZIONE ESPERIENZE -->
    <AppExperience />

    <!-- SEZIONE FORMAZIONE -->
    <AppTraining />

    <AppFooter />

</template>

<style scoped>
section.project {
    background-color: rgb(33, 37, 41)
}

h2,
.my-color {
    color: rgb(194, 203, 160);
}

div.transform:hover {
    transform: scale(1.2);
    transition: 0.4s linear;
}
</style>