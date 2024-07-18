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

      projects: [],
    }
  },

  methods() {

  },

  mounted() {
    axios.get(`${this.api_url}/api/projects`).then(result => {
      //la api funziona
      this.projects = result.data.projects
    })
  },
};
</script>

<template>
  <ProjectCard :cardProjects="projects.data" :api_url="api_url" />
</template>

<style scoped></style>
