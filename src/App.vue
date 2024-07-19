<script>
import axios from 'axios';
import store from './data/store.js'
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';


export default {

  name: "App",

  components: {
    AppHeader,
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

  <router-view></router-view>

</template>

<style scoped></style>
