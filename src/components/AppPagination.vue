<script>

import axios from 'axios';
import store from '../data/store.js';

export default {

    name: "AppPagination",

    data() {
        return {
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
    <footer class="py-3">
        <nav>
            <div class="row m-0 justify-content-center align-items-center">
                <div class="col-6">
                    <!-- BARRA PER CAMBIARE PAGINA -->
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
        </nav>
    </footer>
</template>

<style scoped></style>