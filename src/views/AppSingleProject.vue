<script>
import axios from 'axios';
import store from '../data/store.js';

export default {
    name: "AppSingleProject",

    data() {
        return {
            store,
        }
    },


    mounted() {
        axios.get(`${this.store.api_url}${this.store.projectId}${this.$route.params.id}`).then(result => {

            this.store.singleProject = result.data.project
        })
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="card p-0 h-100 text-center" v-if="store.singleProject">
            <figure class="m-0 h-100">
                <img :src="store.api_url + '/storage/' + store.singleProject.img_preview"
                    class="card-img-top img-fluid object-fit-contain" :alt="store.singleProject.img_preview"
                    style="height: 15rem;">
            </figure>
            <h5 class="card-text my-fs py-2">{{ store.singleProject.title }}</h5>
            <p class="card-text my-fs py-2 m-0">{{ store.singleProject.description }}</p>
            <h6 class="card-text my-fs py-2 m-0">{{ store.singleProject.type.name }}</h6>
            <h5 class="m-0 py-2">Linguaggi Usati:</h5>
            <div class="row m-0 justify-content-center">
                <div class="col-4 p-0 py-3" v-for="language in store.singleProject.languages">
                    <i :class="language.icon">{{ language.name }}</i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>