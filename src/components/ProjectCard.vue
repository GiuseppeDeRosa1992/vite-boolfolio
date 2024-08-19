<script>
import store from '../data/store.js';
import axios from 'axios';
import AppPagination from './AppPagination.vue';



export default {

    name: "ProjectCard",

    //CREO LA PROPS
    props: ["cardProjects", "api_url"],

    //Importo il Componente di Paginazione
    components: {
        AppPagination,
    },

    data() {
        return {
            msg: "I miei Progetti",
            store,
        }
    },

    methods: {
        //FUNZIONE CAMBIA PAGINA CON CHIAMATA AXIOS
        changePage(api_url) {
            axios.get(api_url).then((result) => {
                this.store.projects = result.data.projects;
            });
        }
    },
};

</script>

<template>
    <div class="container">
        <h1 class="text-center py-3 m-0">{{ msg }}</h1>

        <AppPagination />

        <div class="row text-center">
            <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
            <template v-for="project in cardProjects">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100">
                        <h2 class="card-text my-fs py-4">{{ project.title }}</h2>
                        <figure class="m-0">
                            <img :src="api_url + '/storage/' + project.img_preview"
                                class="card-img-top img-fluid object-fit-contain" :alt="project.img_preview"
                                style="height: 15rem;">
                        </figure>
                        <p class="card-text my-fs p-3 m-0">{{ project.description }}</p>
                        <h6 class="card-text my-fs py-2 m-0">{{ project.type.name }}</h6>
                        <h5 class="m-0 py-2">Linguaggi/Framework Usati:</h5>
                        <div class="row m-0 justify-content-center">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-1" v-for="language in project.languages">
                                <i :class="language.icon"></i>
                                <small class="m-0 py-2 d-block fs-6"><b>{{ language.name }}</b></small>
                            </div>
                        </div>
                        <div class="text-center pt-2">
                            <router-link :to="{ name: 'project', params: { slug: project.slug } }"
                                class="btn my-btn-outline w-50">Vedi di
                                più</router-link>
                        </div>

                        <a :href="project.link_git" target="_blank" rel="noopener noreferrer"
                            class="py-2 my-color fs-5">Vai alla repository Git-Hub</a>
                    </div>
                </div>
            </template>
        </div>

        <AppPagination />
    </div>
</template>

<style scoped>
div.container {
    padding-top: 6rem;
}

div>small {
    background-color: rgb(194, 203, 160);
    border-radius: 10px;
}

.my-color {
    color: rgb(194, 203, 160);
}

@media all and (max-width: 576px) {
    h1 {
        margin: 4rem 0 0 0 !important;
    }
}
</style>
