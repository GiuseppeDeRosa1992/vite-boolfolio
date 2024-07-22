<script>


import store from '../data/store.js';

export default {

    name: "AppHeader",

    data() {
        return {
            string: "Giuseppe Port-Folio",
            store,
        }
    },
};

</script>

<template>
    <header class="bg-white py-1">
        <nav>


            <h2 class="m-0 text-danger text-center py-3 fs-1">
                {{ string }}
            </h2>


            <!-- <div class="col-5"> -->
            <!-- BARRA PER CAMBIARE PAGINA -->
            <!-- <nav aria-label="Page navigation"> -->
            <!-- <ul class="pagination justify-content-center m-0"> -->
            <!-- CICLO DENTRO LA API PROJECTS ALLA VOCE LINKS DOVE CI SONO LE MIE PAGINE CON DENREO I PROGETTI E POI DO LA CLASSE DISABILITA SE è DIVERSO DA LINK.URL-->
            <!-- <li v-for="link in store.projects.links" class="page-item" -->
            <!-- :class="{ disabled: !link.url, active: link.active }"> -->
            <!-- CON IL METODO @CLICK RICHIAMO LA FUNZIONE CAMBIA PAGINA E GLI DO IL LINK.URL CHE è DOVE STA IL MIO URL PER LE PAGINE -->
            <!-- <button class="page-link" @click="changePage(link.url)" v-html="link.label"></button> -->
            <!-- </li> -->
            <!-- </ul> -->
            <!-- </nav> -->
            <!-- </div> -->

        </nav>

        <section>
            <ul class="row m-0 p-0">
                <li v-for="(route, index) in store.arrayLink" :key="index" class="col-3 bg-white">
                    <router-link :to="{ name: route }" class="nav-link text-center py-2">
                        {{ route }}
                    </router-link>
                </li>
            </ul>
        </section>
    </header>
</template>

<style scoped>
li {
    list-style-type: none;
}
</style>