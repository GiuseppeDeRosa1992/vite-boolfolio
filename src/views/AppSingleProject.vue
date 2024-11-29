<!-- <script>
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
        axios.get(`${this.store.api_url}${this.store.projectId}${this.$route.params.slug}`).then(result => {
            //creo if che se il progetto ce me lo restituisce sennò da pagina non trovata
            if (result.data.success) {
                this.store.singleProject = result.data.project
            } else {
                this.$router.push({ name: 'not-found' })
            }
        })
    }
}
</script>

<template>
    <section>
        <div class="container mt-3">
            <div class="card p-0 h-100 text-center" v-if="store.singleProject">
                <figure class="m-0">
                    <img :src="store.api_url + '/storage/' + store.singleProject.img_preview"
                        class="card-img-top img-fluid object-fit-contain" :alt="store.singleProject.img_preview"
                        style="height: 15rem;">
                </figure>
                <div class="container">
                    <h5 class="card-text my-fs py-2">{{ store.singleProject.title }}</h5>
                    <p class="card-text my-fs py-2 m-0">{{ store.singleProject.description }}</p>
                    <h6 class="card-text my-fs py-2 m-0">{{ store.singleProject.type.name }}</h6>
                    <h5 class="m-0 py-2">Linguaggi/framework Usati:</h5>
                    <div class="row m-0 justify-content-center">
                        <div class="col-12 col-sm-3 col-md-2 p-0 py-3"
                            v-for="language in store.singleProject.languages">
                            <i :class="language.icon">{{ language.name }}</i>
                        </div>
                    </div>
                </div>

                <a :href="store.singleProject.link_git" target="_blank" rel="noopener noreferrer"
                    class="py-2 my-color fs-5">Vai alla repository Git-Hub</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding-top: 7rem;
}

.my-color {
    color: rgb(194, 203, 160)
}

@media all and (max-width: 576px) {
    section {
        padding-top: 10rem;
    }
}
</style> -->