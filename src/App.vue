<script>
import store from './data/store.js';
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
};
</script>

<template>
  <AppHeader />

  <router-view></router-view>

</template>

<style scoped></style>
