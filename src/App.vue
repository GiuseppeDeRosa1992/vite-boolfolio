<script>
import axios from 'axios';
import store from './data/store.js'
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {

  name: "App",

  components: {
    AppHeader,
    ProjectCard,
    AppFooter,
  },

  data() {
    return {
      messaggio: "ciao sono Giuseppe",
      store,
    }
  },


  mounted() {
    //POPOLO TRAMITE CHIAMATA AXIOS LA VARIABILE PROJECTS
    axios.get(`${this.store.api_url}/api/projects`).then(result => {
      console.log(result.data);//la api funziona
      this.store.projects = result.data.projects
    })
  },
};
</script>

<template>

  <AppHeader />

  <!-- RICHIAMO LE CARD DEI PROGETTI E TRAMITE LE PROPS GLI PASSO LA API CHE MI SERVE -->
  <ProjectCard :cardProjects="store.projects.data" :api_url="store.api_url" />

  <AppFooter />

</template>

<style scoped></style>
