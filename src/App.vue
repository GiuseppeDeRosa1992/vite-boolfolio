<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';


export default {

  name: "App",

  components: {
    ProjectCard,
  },

  data() {
    return {
      messaggio: "ciao sono Giuseppe",

      api_url: "http://127.0.0.1:8000",

      //VIENE POPOLATA DALLA CHIAMATA AXIOS NEL MOUNTED
      projects: [],
    }
  },

  methods: {
    //FUNZIONE CAMBIA PAGINA CON CHIAMATA AXIOS
    changePage(api_url) {
      axios.get(api_url).then((result) => {
        this.projects = result.data.projects;
      });
    }
  },

  mounted() {
    //POPOLO TRAMITE CHIAMATA AXIOS LA VARIABILE PROJECTS
    axios.get(`${this.api_url}/api/projects`).then(result => {
      console.log(result.data);//la api funziona
      this.projects = result.data.projects
    })
  },
};
</script>

<template>

  <!-- BARRA PER CAMBIARE PAGINA -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <!-- CICLO DENTRO LA API PROJECTS ALLA VOCE LINKS DOVE CI SONO LE MIE PAGINE CON DENREO I PROGETTI E POI DO LA CLASSE DISABILITA SE è DIVERSO DA LINK.URL-->
      <li v-for="link in projects.links" class="page-item" :class="{ disabled: !link.url, active: link.active }">
        <!-- CON IL METODO @CLICK RICHIAMO LA FUNZIONE CAMBIA PAGINA E GLI DO IL LINK.URL CHE è DOVE STA IL MIO URL PER LE PAGINE -->
        <button class="page-link" @click="changePage(link.url)" v-html="link.label"></button>
      </li>
    </ul>
  </nav>

  <!-- RICHIAMO LE CARD DEI PROGETTI E TRAMITE LE PROPS GLI PASSO LA API CHE MI SERVE -->
  <ProjectCard :cardProjects="projects.data" :api_url="api_url" />


  <!-- BARRA PER CAMBIARE PAGINA -->
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <!-- CICLO DENTRO LA API PROJECTS ALLA VOCE LINKS DOVE CI SONO LE MIE PAGINE CON DENREO I PROGETTI E POI DO LA CLASSE DISABILITA SE è DIVERSO DA LINK.URL-->
      <li v-for="link in projects.links" class="page-item" :class="{ disabled: !link.url, active: link.active }">
        <!-- CON IL METODO @CLICK RICHIAMO LA FUNZIONE CAMBIA PAGINA E GLI DO IL LINK.URL CHE è DOVE STA IL MIO URL PER LE PAGINE -->
        <button class="page-link" @click="changePage(link.url)" v-html="link.label"></button>
      </li>
    </ul>
  </nav>

</template>

<style scoped></style>
