<script>

import store from "../data/store.js";
import axios from "axios";



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

    mounted() {
        //POPOLO TRAMITE CHIAMATA AXIOS LA VARIABILE PROJECTS
        axios.get(`${this.store.api_url}${this.store.latest}`).then(result => {

            this.store.latestProjects = result.data.projects
        })
    },
};

</script>

<template>
    <!-- <h1 class="text-white text-center m-0 py-2">
        {{ title }}
    </h1> -->

    <div class="row text-white text-center" v-if="store.projects">
        <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
        <template v-for="project in store.latestProjects">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                <div class="card p-0 h-100">
                    <figure class="m-0 h-100">
                        <img :src="store.api_url + '/storage/' + project.img_preview"
                            class="card-img-top img-fluid object-fit-contain" alt="" style="height: 15rem;">
                    </figure>
                    <h5 class="card-text my-fs py-2">{{ project.title }}</h5>
                    <!-- importo il link per vedere i dettagli anche sui progetti nella home -->
                    <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                        class="btn btn-outline-success w-50">Vedi di
                        più</router-link>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped></style>