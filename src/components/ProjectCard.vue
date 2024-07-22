<script>
import store from '../data/store.js';
import axios from 'axios';



export default {

    name: "ProjectCard",

    //CREO LA PROPS
    props: ["cardProjects", "api_url"],

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
    <div class="container py-2">
        <h1 class="text-white text-center py-3 m-0">{{ msg }}</h1>


        <!-- BARRA PER CAMBIARE PAGINA -->
        <div class="text-center">
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center m-0">
                    <!-- CICLO DENTRO LA API PROJECTS ALLA VOCE LINKS DOVE CI SONO LE MIE PAGINE CON DENREO I PROGETTI E POI DO LA CLASSE DISABILITA SE è DIVERSO DA LINK.URL-->
                    <li v-for="link in store.projects.links" class="page-item"
                        :class="{ disabled: !link.url, active: link.active }">
                        <!-- CON IL METODO @CLICK RICHIAMO LA FUNZIONE CAMBIA PAGINA E GLI DO IL LINK.URL CHE è DOVE STA IL MIO URL PER LE PAGINE -->
                        <button class="page-link" @click="changePage(link.url)" v-html="link.label"></button>
                    </li>
                </ul>
            </nav>
        </div>


        <div class="row text-white text-center">
            <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
            <template v-for="project in cardProjects">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div class="card p-0 h-100">
                        <figure class="m-0 h-100">
                            <img :src="api_url + '/storage/' + project.img_preview"
                                class="card-img-top img-fluid object-fit-contain" :alt="project.img_preview"
                                style="height: 15rem;">
                        </figure>
                        <h5 class="card-text my-fs py-2">{{ project.title }}</h5>
                        <p class="card-text my-fs py-2 m-0">{{ project.description }}</p>
                        <h6 class="card-text my-fs py-2 m-0">{{ project.type.name }}</h6>
                        <h5 class="m-0 py-2">Linguaggi Usati:</h5>
                        <div class="row m-0 justify-content-center">
                            <div class="col-4 p-0 py-3" v-for="language in project.languages">
                                <i :class="language.icon">{{ language.name }}</i>
                            </div>
                        </div>
                        <router-link :to="{ name: 'project', params: { id: project.id } }"
                            class="btn btn-outline-success w-50">Vedi di
                            più</router-link>
                    </div>
                </div>
            </template>
        </div>


        <!-- BARRA PER CAMBIARE PAGINA -->
        <div class="text-center">
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center m-0">
                    <!-- CICLO DENTRO LA API PROJECTS ALLA VOCE LINKS DOVE CI SONO LE MIE PAGINE CON DENREO I PROGETTI E POI DO LA CLASSE DISABILITA SE è DIVERSO DA LINK.URL-->
                    <li v-for="link in store.projects.links" class="page-item"
                        :class="{ disabled: !link.url, active: link.active }">
                        <!-- CON IL METODO @CLICK RICHIAMO LA FUNZIONE CAMBIA PAGINA E GLI DO IL LINK.URL CHE è DOVE STA IL MIO URL PER LE PAGINE -->
                        <button class="page-link" @click="changePage(link.url)" v-html="link.label"></button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>
