<script>

import store from "../data/store.js";
import axios from "axios";
import AppSkills from "../components/AppSkills.vue";
import AppProfile from "../components/AppProfile.vue";
import AppFooter from "../components/AppFooter.vue";



export default {

    name: "AppHome",

    components: {
        AppSkills,
        AppProfile,
        AppFooter,
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

    <!-- SEZIONE COMPETENZE -->
    <AppSkills />

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
                            <div class="text-center py-2 transform">
                                <!-- importo il link per vedere i dettagli anche sui progetti nella home -->
                                <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn btn-outline-success w-50">Vedi di
                                    più</router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <AppFooter />

</template>

<style scoped>
section.project {
    background-color: rgb(33, 37, 41)
}

h2 {
    color: aquamarine;
}

div.transform:hover {
    transform: scale(1.2);
    transition: 0.4s linear;
}
</style>