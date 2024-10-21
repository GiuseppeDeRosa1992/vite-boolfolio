<script>


import store from '../data/store.js';

export default {

    name: "AppHeader",

    data() {
        return {
            store,
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        },

    },

    mounted() {
        window.addEventListener("scroll", () => {
            const scroll = document.getElementById("toTop");
            if (window.scrollY > 200) {
                scroll.classList.add("active")
            } else {
                scroll.classList.remove("active")
            }
        })
    },
};

</script>

<template>
    <header class="py-3" id="header">
        <nav>
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

        <nav>
            <ul class="row m-0 p-0">
                <li v-for="(route, index) in store.arrayLink" :key="index" class="col-6 col-sm-3">
                    <router-link :to="{ name: route }" class="nav-link text-center py-3 fs-5">
                        {{ route }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

    <button id="toTop" class="btnScrollToTop p-0" type="button" @click="scrollToTop()">
        <a><i class="fa-solid fa-chevron-up fa-xl"></i></a>
    </button>
</template>

<style scoped>
header {
    background-color: rgb(194, 203, 160);
    position: fixed;
    width: 100%;
    z-index: 999;
}

li {
    list-style-type: none;
}

li:hover {
    transform: scale(1.3);
    transition: 0.3s linear;
}

.btnScrollToTop {
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 100px;
    right: 20px;
    background-color: whitesmoke;
    border-color: whitesmoke;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s;
    z-index: 1000;
}

#toTop>a {
    color: black;
}

#toTop>a:hover {
    color: rgb(194, 203, 160);
}

.btnScrollToTop.active {
    bottom: 100px;
    right: 20px;
    opacity: 1;
    z-index: 1000;
}
</style>