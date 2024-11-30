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
        // axios.get(`${this.store.api_url}${this.store.latest}`).then(result => {

        //     this.store.latestProjects = result.data.projects
        // })
    },
};

</script>

<template>

    <!-- SEZIONE PROFILO -->
    <AppProfile />

    <!-- SEZIONE CON ALCUNI PROGETTI -->
    <section class="project pb-2">
        <div class="container">
            <div class="row text-center py-5">
                <h2 class="m-0 pb-3 text-start fs-1">Alcuni Progetti</h2>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[0].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[0].image" class="card-img-top img-fluid object-fit-contain"
                                :alt="store.projectsBoolean[0].title" style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[0].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[3].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[3].image" class="card-img-top img-fluid object-fit-contain"
                                :alt="store.projectsBoolean[3].title" style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[3].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[10].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[10].image"
                                class="card-img-top img-fluid object-fit-contain" :alt="store.projectsBoolean[10].title"
                                style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[10].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[4].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[4].image" class="card-img-top img-fluid object-fit-contain"
                                :alt="store.projectsBoolean[4].title" style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[4].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[15].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[15].image"
                                class="card-img-top img-fluid object-fit-contain" :alt="store.projectsBoolean[15].title"
                                style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[15].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100 my-shadow">
                        <h3 class="card-text py-3 m-0 fs-2">{{ store.projectsBoolean[6].title }}</h3>
                        <figure class="m-0">
                            <img :src="store.projectsBoolean[6].image" class="card-img-top img-fluid object-fit-contain"
                                :alt="store.projectsBoolean[6].title" style="height: 15rem;">
                        </figure>
                        <a :href="store.projectsBoolean[6].linkGitHub" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla Repository Git-Hub</a>
                        <div class="text-center py-2 transform">

                            <!-- <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                    class="btn my-btn-outline w-50">Vedi di più</router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Onda -->
    <div class="my-bg-black">
        <svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
            preserveAspectRatio="none">
            <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                fill="rgb(194, 203, 160)"></path>
        </svg>
    </div>


    <!-- SEZIONE ESPERIENZE -->
    <AppExperience />

    <!-- Onda -->
    <div class="my-bg-green">
        <svg class="wave-1hkxOo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
            preserveAspectRatio="none">
            <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                fill="currentColor"></path>
        </svg>
    </div>

    <!-- SEZIONE FORMAZIONE -->
    <AppTraining />

    <AppFooter />

</template>

<style scoped>
section.project,
.my-bg-black {
    background-color: rgb(33, 37, 41)
}

h2,
.my-color {
    color: rgb(194, 203, 160);
}

.my-shadow:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgb(148, 160, 104);
}

div.transform:hover {
    transform: scale(1.2);
    transition: 0.4s linear;
}

/* STYLE ONDA */
svg.rotate {
    transform: scaleY(-1);
}

.my-bg-green {
    background-color: rgb(194, 203, 160)
}
</style>